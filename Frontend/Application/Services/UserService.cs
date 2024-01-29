using System.Net.Http.Json;
using System.Security.Claims;
using Blazored.LocalStorage;
using Architect.Application.Models;

namespace Frontend.Application.Services {

	public class UserService(IHttpClientFactory ClientFactory, ILocalStorageService LocalStorage) {

		private readonly IHttpClientFactory ClientFactory = ClientFactory;
		private readonly ILocalStorageService LocalStorage = LocalStorage;

		public DateTime UserFetched = DateTime.UtcNow;
		public UserPreferences UserPreferences = new();
		public UserInfo UserInfo = new();
		private UserInfo? CurrentUser = new();
		private UserInfo? SavedUser = new();
		private byte[]? UserPhoto;

		public async Task FecthUserAsync(ClaimsPrincipal UserClaims) {

			if (UserClaims is not null) {

				if (UserClaims.Identity!.IsAuthenticated) {

					CurrentUser = UserInfo;
					CurrentUser.Email = UserClaims.FindFirst("email")?.Value;

					var defaultDate = new DateTime(1994, 03, 09, 16, 00, 00);
					SavedUser = await LocalStorage.GetItemAsync<UserInfo>("UserInfo") ?? SavedUser;
					UserPreferences = await LocalStorage.GetItemAsync<UserPreferences>("UserPreferences") ?? UserPreferences;
					UserFetched = await LocalStorage.GetItemAsync<DateTime?>("UserFetched") ?? defaultDate;

					if (CurrentUser.Email == SavedUser!.Email && DateTime.UtcNow < UserFetched.AddHours(6)) {

						UserInfo = SavedUser;

					} else {

						UserInfo = SavedUser;
						var client = ClientFactory.CreateClient("GraphAPI");
						UserInfo = await client.GetFromJsonAsync<UserInfo>("v1.0/me") ?? SavedUser;
						UserPhoto = await client.GetByteArrayAsync("v1.0/me/photos/96x96/$value");

						UserInfo.Role = UserClaims.FindFirst("role")?.Value ?? "System.User";
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