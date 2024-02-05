using System.Security.Claims;

namespace Hephaestus.Frontend.Services {

	public class UserService(IHttpClientFactory clientFactory, ILocalStorageService localStorage) {

		private readonly IHttpClientFactory ClientFactory = clientFactory;
		private readonly ILocalStorageService LocalStorage = localStorage;

		public ClaimsPrincipal? UserAccount;
		public DateTime UserFetched = DateTime.UtcNow;
		//public Preferences UserPreferences = new();
		public UserInfo UserInfo = new();

		private byte[]? UserPhoto;
		private GraphUser GraphUser = new();
		private UserInfo ActualUser = new();
		private UserInfo LocalUser = new();

		public async Task FecthUserAsync() {

			if (UserAccount is not null) {

				ActualUser = UserInfo;
				ActualUser.Guid = UserAccount.FindFirst("oid")?.Value ?? string.Empty;

				var defaultDate = new DateTime(1994, 03, 09, 16, 00, 00);
				LocalUser = await LocalStorage.GetItemAsync<UserInfo>("UserInfo") ?? new();
				//UserPreferences = await LocalStorage.GetItemAsync<Preferences>("UserPreferences") ?? new();
				UserFetched = await LocalStorage.GetItemAsync<DateTime?>("UserFetched") ?? defaultDate;

				if (ActualUser.Guid == LocalUser.Guid && DateTime.UtcNow < UserFetched.AddHours(6)) {

					UserInfo = LocalUser;

				} else {

					UserInfo = LocalUser;
					var client = ClientFactory.CreateClient("GraphAPI");
					GraphUser = await client.GetFromJsonAsync<GraphUser>("v1.0/me") ?? GraphUser;
					UserPhoto = await client.GetByteArrayAsync("v1.0/me/photos/96x96/$value");

					UserInfo.Guid = GraphUser.Guid;
					UserInfo.Name = GraphUser.Name;
					UserInfo.FirstName = GraphUser.FirstName;
					UserInfo.SecondName = GraphUser.SecondName;
					UserInfo.Office = GraphUser.Office;
					UserInfo.Title = GraphUser.Title;
					UserInfo.Email = GraphUser.Email;
					UserInfo.Role = UserAccount.FindFirst("role")?.Value ?? "System.User";
					UserInfo.Photo = "data:image/jpeg;base64," + Convert.ToBase64String(UserPhoto);
					UserInfo.Hidden = false;
					UserInfo.Active = true;

					await LocalStorage.SetItemAsync("UserFetched", DateTime.UtcNow);
					await SaveUserAsync();

				}

			}

		}

		public async Task SaveUserAsync() {

			if (UserInfo is not null) await LocalStorage.SetItemAsync("UserInfo", UserInfo);
			//if (UserPreferences is not null) await LocalStorage.SetItemAsync("UserPreferences", UserPreferences);

		}

	}

}