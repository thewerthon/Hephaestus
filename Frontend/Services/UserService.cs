using System.Globalization;
using System.Security.Claims;
using Hephaestus.Architect.Models;
using Hephaestus.Frontend.Pages;

namespace Hephaestus.Frontend.Services {

	public class UserService(IHttpClientFactory client, ILocalStorageService storage, IJSRuntime runtime) {

		private readonly IHttpClientFactory ClientFactory = client;
		private readonly ILocalStorageService LocalStorage = storage;
		private readonly IJSRuntime JSRuntime = runtime;

		public ClaimsPrincipal? Claims;
		public AppUser AppUser = new();
		public AppUser LocalUser = new();
		public UserInfo ServerUser = new();
		public GraphUser GraphUser = new();
		public DateTime UserFetched = default;
		public byte[]? UserPhoto;

		public void InitializeUser() {

			if (Claims?.Identity?.IsAuthenticated ?? false) {

				AppUser.Guid = Claims?.FindFirst("oid")?.Value ?? "";
				AppUser.Role = Claims?.FindFirst("role")?.Value ?? "System.User";

			}

		}

		public async Task InitializeLocalUserAsync() {

			await GetLocalUserAsync();

			AppUser.Id = LocalUser.Id;
			AppUser.Name = LocalUser.Name;
			AppUser.FirstName = LocalUser.FirstName;
			AppUser.SecondName = LocalUser.SecondName;
			AppUser.Department = LocalUser.Department;
			AppUser.Country = LocalUser.Country;
			AppUser.Office = LocalUser.Office;
			AppUser.Title = LocalUser.Title;
			AppUser.Email = LocalUser.Email;
			AppUser.Active = LocalUser.Active;
			AppUser.Photo = LocalUser.Photo;
			AppUser.Preferences = LocalUser.Preferences;

		}

		public async Task InitializeServerUserAsync() {

			await GetServerUserAsync();

			if (AppUser.Guid == ServerUser.Guid) {

				AppUser.Id = ServerUser.Id;
				AppUser.Name = ServerUser.Name;
				AppUser.FirstName = ServerUser.FirstName;
				AppUser.SecondName = ServerUser.SecondName;
				AppUser.Department = ServerUser.Department;
				AppUser.Country = ServerUser.Country;
				AppUser.Office = ServerUser.Office;
				AppUser.Title = ServerUser.Title;
				AppUser.Email = ServerUser.Email;
				AppUser.Active = ServerUser.Active;
				AppUser.Photo = ServerUser.Photo;
				AppUser.Preferences = ServerUser.Preferences ?? AppUser.Preferences;

			}

		}

		public async Task InitializeGraphUserAsync() {

			await GetGraphUserAsync();

			if (AppUser.Guid == GraphUser.Guid) {

				AppUser.Name = GraphUser.Name;
				AppUser.FirstName = GraphUser.FirstName;
				AppUser.SecondName = GraphUser.SecondName;
				AppUser.Department = GraphUser.Department;
				AppUser.Country = GraphUser.Country;
				AppUser.Office = GraphUser.Office;
				AppUser.Title = GraphUser.Title;
				AppUser.Email = GraphUser.Email;
				AppUser.Active = GraphUser.Active;
				AppUser.Photo = UserPhoto == null ? AppUser.Photo : "data:image/jpeg;base64," + Convert.ToBase64String(UserPhoto);

			}

		}

		public async Task SetFetchedAsync() {

			await LocalStorage.SetItemAsync("UserFetched", DateTime.UtcNow);

		}

		public async Task GetFetchedAsync() {

			try {

				UserFetched = await LocalStorage.GetItemAsync<DateTime?>("UserFetched") ?? default;

			} catch {

				await LocalStorage.RemoveItemAsync("UserFetched");
				UserFetched = default;

			}

		}

		public async Task GetLocalUserAsync() {

			try {

				LocalUser = await LocalStorage.GetItemAsync<AppUser?>("UserInfo") ?? new();

			} catch {

				await LocalStorage.RemoveItemAsync("UserInfo");
				LocalUser = new();

			}

		}

		public async Task GetServerUserAsync() {

			try {

				var odata = ClientFactory.CreateClient("OData");
				ServerUser = await odata.GetFromJsonAsync<UserInfo>($"user/{AppUser.Guid}?expand=preferences") ?? ServerUser;

			} catch {

				ServerUser = new();

			}

		}

		public async Task GetGraphUserAsync() {

			try {

				Console.WriteLine("graph fetch");
				var graph = ClientFactory.CreateClient("GraphAPI");
				var task1 = graph.GetFromJsonAsync<GraphUser>("v1.0/me?$select=id,displayName,givenName,surname,country,officeLocation,department,jobTitle,mail,accountEnabled");
				var task2 = graph.GetByteArrayAsync("v1.0/me/photos/96x96/$value");

				await Task.WhenAll(task1, task2);
				GraphUser = task1.Result ?? GraphUser;
				UserPhoto = task2.Result ?? null;

			} catch {

				GraphUser = new();
				UserPhoto = null;

			}

		}

		public async Task FecthUserAsync(bool force = false) {

			if (Claims?.Identity?.IsAuthenticated ?? false) {

				InitializeUser();
				await GetFetchedAsync();
				await InitializeLocalUserAsync();
				await InitializeServerUserAsync();

				if (DateTime.UtcNow > UserFetched.AddHours(24) || force) {

					await InitializeGraphUserAsync();
					await SetFetchedAsync();

				}

				await SetThemeAsync(AppUser.Preferences.Theme, false);
				await SetLanguageAsync(AppUser.Preferences.Language, false);
				await SaveUserAsync(true, true);

			}

		}

		public async Task SetThemeAsync(string? theme, bool save = true) {

			if (AppUser.Preferences.Theme != theme) {

				AppUser.Preferences.Theme = theme;
				await JSRuntime.InvokeVoidAsync("applyTheme", theme);
				if (save) await SaveUserAsync(true, true);

			}

		}

		public async Task SetLanguageAsync(string? language, bool save = true) {

			if (AppUser.Preferences.Language != language) {

				CultureInfo culture;
				culture = new CultureInfo(AppUser.Preferences.Language ?? "pt");
				CultureInfo.DefaultThreadCurrentCulture = culture;
				CultureInfo.DefaultThreadCurrentUICulture = culture;
				AppUser.Preferences.Language = language;
				if (save) await SaveUserAsync(true, true);

			}

		}

		public async Task SaveUserAsync(bool local = true, bool server = true) {

			try {

				if (local) await SaveLocalUserAsync();
				if (server) await SaveServerUserAsync();

			} catch (Exception ex) {

				Console.WriteLine("An error ocurred while saving the user.");
				Console.WriteLine(ex.Message);

			}

		}

		public async Task SaveLocalUserAsync() {

			if (AppUser is not null) {

				await LocalStorage.SetItemAsync("UserInfo", AppUser);

			}

		}

		public async Task SaveServerUserAsync() {

			if (AppUser is not null) {

				var odata = ClientFactory.CreateClient("OData");
				var uri = new Uri(odata.BaseAddress!, $"user/{AppUser.Guid}?expand=preferences");

				var message = new HttpRequestMessage(HttpMethod.Put, uri) {
					Content = new StringContent(ODataJsonSerializer.Serialize(AppUser), Encoding.UTF8, "application/json")
				};

				//Console.WriteLine(AppUser.Preferences.Theme);
				//Console.WriteLine(ODataJsonSerializer.Serialize(AppUser));
				//Console.WriteLine(ODataJsonSerializer.Serialize(AppUser.Preferences));

				var response = await odata.SendAsync(message);
				var userinfo = await HttpResponseMessageExtensions.ReadAsync<UserInfo>(response);
				AppUser.Id = userinfo.Id;

			}

		}

		public async Task RefreshUserAsync() {

			await InitializeLocalUserAsync();
			await SaveUserAsync(true, true);

		}

	}

}