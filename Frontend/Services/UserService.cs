using System.Net.Http.Json;
using System.Security.Claims;
using Blazored.LocalStorage;
using Hephaestus.Architect.Models;

namespace Hephaestus.Frontend.Services {

	public class UserService(IHttpClientFactory clientFactory, ILocalStorageService localStorage) {

		private readonly IHttpClientFactory ClientFactory = clientFactory;
		private readonly ILocalStorageService LocalStorage = localStorage;

		public DateTime UserFetched = DateTime.UtcNow;
		public Preferences UserPreferences = new();
		public UserInfo UserInfo = new();
		private UserInfo? CurrentUser = new();
		private UserInfo? SavedUser = new();
		private byte[]? UserPhoto;

		public async Task FecthUserAsync(ClaimsPrincipal user) {

			if (user is not null) {

				if (user.Identity!.IsAuthenticated) {

					CurrentUser = UserInfo;
					CurrentUser.Guid = user.FindFirst("oid")?.Value ?? string.Empty;

					var defaultDate = new DateTime(1994, 03, 09, 16, 00, 00);
					SavedUser = await LocalStorage.GetItemAsync<UserInfo>("UserInfo") ?? new();
					UserPreferences = await LocalStorage.GetItemAsync<Preferences>("UserPreferences") ?? new();
					UserFetched = await LocalStorage.GetItemAsync<DateTime?>("UserFetched") ?? defaultDate;

					if (CurrentUser.Guid == SavedUser.Guid && DateTime.UtcNow < UserFetched.AddHours(6)) {

						UserInfo = SavedUser;

					} else {

						UserInfo = SavedUser;
						var client = ClientFactory.CreateClient("GraphAPI");
						UserInfo = await client.GetFromJsonAsync<UserInfo>("v1.0/me") ?? SavedUser;
						UserPhoto = await client.GetByteArrayAsync("v1.0/me/photos/96x96/$value");

						UserInfo.Role = user.FindFirst("role")?.Value ?? "System.User";
						UserInfo.Photo = "data:image/jpeg;base64," + Convert.ToBase64String(UserPhoto);

						await LocalStorage.SetItemAsync("UserFetched", DateTime.UtcNow);
						await SaveUserAsync();

					}

				}

			}

		}

		public async Task SaveUserAsync() {

			if (UserInfo is not null) await LocalStorage.SetItemAsync("UserInfo", UserInfo);
			if (UserPreferences is not null) await LocalStorage.SetItemAsync("UserPreferences", UserPreferences);

		}

	}

}