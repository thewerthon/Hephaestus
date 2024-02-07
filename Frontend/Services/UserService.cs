using System;
using System.Net.Http;
using System.Security.Claims;
using System.Threading.Tasks;
using Radzen;

namespace Hephaestus.Frontend.Services {

	public class UserService(IHttpClientFactory client, ILocalStorageService storage) {

		private readonly IHttpClientFactory ClientFactory = client;
		private readonly ILocalStorageService LocalStorage = storage;

		public ClaimsPrincipal? UserClaims;
		public DateTime UserFetched = DateTime.UtcNow;
		public UserInfo UserInfo = new();

		private byte[]? UserPhoto;
		private GraphUser GraphUser = new();
		private UserInfo ActualUser = new();
		private UserInfo ServerUser = new();
		private UserInfo LocalUser = new();

		public async Task FecthUserAsync() {

			if (UserClaims is not null) {

				ActualUser = UserInfo;
				ActualUser.Guid = UserClaims.FindFirst("oid")?.Value ?? string.Empty;
				var date = new DateTime(1994, 03, 09, 16, 00, 00);
				UserFetched = date;

				try {

					LocalUser = await LocalStorage.GetItemAsync<UserInfo?>("UserInfo") ?? new();
					UserFetched = await LocalStorage.GetItemAsync<DateTime?>("UserFetched") ?? date;

				} catch {

					await LocalStorage.RemoveItemAsync("UserInfo");
					await LocalStorage.RemoveItemAsync("UserFetched");
					LocalUser = new() { Preferences = new() { Theme = "auto", Language = "pt" }, Role = "System.User" };

				}

				if (ActualUser.Guid == LocalUser.Guid && DateTime.UtcNow < UserFetched.AddHours(6)) {

					UserInfo = LocalUser;

				} else {

					try {

						var graph = ClientFactory.CreateClient("GraphAPI");
						var task1 = graph.GetFromJsonAsync<GraphUser>("v1.0/me");
						var task2 = graph.GetByteArrayAsync("v1.0/me/photos/96x96/$value");
						await Task.WhenAll(task1, task2);

						GraphUser = task1.Result ?? GraphUser;
						UserPhoto = task2.Result ?? UserPhoto;

					} catch {

						GraphUser = new();
						UserPhoto = null;

					}

					try {

						var odata = ClientFactory.CreateClient("OData");
						ServerUser = await odata.GetFromJsonAsync<UserInfo>($"user/{ActualUser.Guid}?expand=preferences") ?? ServerUser;

					} catch {

						ServerUser = new();

					}

					if (GraphUser.Guid == ActualUser.Guid) {

						UserInfo.Guid = GraphUser.Guid;
						UserInfo.Name = GraphUser.Name;
						UserInfo.FirstName = GraphUser.FirstName;
						UserInfo.SecondName = GraphUser.SecondName;
						UserInfo.Office = GraphUser.Office;
						UserInfo.Title = GraphUser.Title;
						UserInfo.Email = GraphUser.Email;
						UserInfo.Hidden = false;
						UserInfo.Active = true;

					}

					UserInfo.Id
						= LocalUser.Id != 0 ? LocalUser.Id
						: ServerUser.Id != 0 ? ServerUser.Id
						: 0;

					UserInfo.Role
						= UserClaims.FindFirst("role")?.Value
						?? "System.User";

					UserInfo.Photo
						= UserPhoto == null ? "images/users/unknown.jpg"
						: "data:image/jpeg;base64," + Convert.ToBase64String(UserPhoto);

					UserInfo.Preferences
						= ServerUser.Preferences
						?? LocalUser.Preferences;

					await LocalStorage.SetItemAsync("UserFetched", DateTime.UtcNow);
					await SaveUserAsync();

				}

			}

		}

		public async Task SaveUserAsync() {

			if (UserInfo is not null) {

				try {

					var odata = ClientFactory.CreateClient("OData");
					var uri = new Uri(odata.BaseAddress!, $"users({UserInfo.Id})?expand=preferences&upsert=true");

					var message = new HttpRequestMessage(HttpMethod.Put, uri) {
						Content = new StringContent(ODataJsonSerializer.Serialize(UserInfo), Encoding.UTF8, "application/json")
					};

					var response = await odata.SendAsync(message);
					UserInfo = await HttpResponseMessageExtensions.ReadAsync<UserInfo>(response);
					await LocalStorage.SetItemAsync("UserInfo", UserInfo);

				} catch (Exception ex) {

					Console.WriteLine(ex.Message);

				}

			}

		}

	}

}