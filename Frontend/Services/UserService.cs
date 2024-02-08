using System.Globalization;
using Hephaestus.Frontend.Pages;

namespace Hephaestus.Frontend.Services {

	public class UserService(IHttpClientFactory client, ILocalStorageService storage, IJSRuntime runtime) {

		private readonly IHttpClientFactory ClientFactory = client;
		private readonly ILocalStorageService LocalStorage = storage;
		private readonly IJSRuntime JSRuntime = runtime;

		public int User;
		public string? Guid;
		public string? Role;

		public AppUser CurrentUser = new();
		public AppPreferences Preferences = new();

		private AppUser LocalUser = new();
		private UserInfo ServerUser = new();
		private GraphUser GraphUser = new();
		private AppPreferences LocalPreferences = new();
		private Preferences ServerPreferences = new();
		private DateTime LastFetched = default;
		private byte[]? UserPhoto;

		private void InitializeUser() {

			CurrentUser.Id = User;
			CurrentUser.Guid = Guid;
			CurrentUser.Role = Role;
			Preferences.User = User;

		}

		private async Task SetFetchedAsync() {

			await LocalStorage.SetItemAsync("LastFetched", DateTime.UtcNow);

		}

		private async Task GetFetchedAsync() {

			try {

				LastFetched = await LocalStorage.GetItemAsync<DateTime?>("LastFetched") ?? default;

			} catch {

				await LocalStorage.RemoveItemAsync("LastFetched");
				LastFetched = default;

			}

		}

		private async Task GetLocalUserAsync() {

			try {

				LocalUser = await LocalStorage.GetItemAsync<AppUser?>("CurrentUser") ?? new();

			} catch {

				await LocalStorage.RemoveItemAsync("CurrentUser");
				LocalUser = new();

			}

		}

		private async Task GetServerUserAsync() {

			try {

				var odata = ClientFactory.CreateClient("OData");
				ServerUser = await odata.GetFromJsonAsync<UserInfo>($"User/{Guid}") ?? ServerUser;

			} catch {

				ServerUser = new();

			}

		}

		private async Task GetGraphUserAsync() {

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

		private async Task GetLocalPreferencesAsync() {

			try {

				LocalPreferences = await LocalStorage.GetItemAsync<AppPreferences?>("Preferences") ?? new();

			} catch {

				await LocalStorage.RemoveItemAsync("Preferences");
				LocalPreferences = new();

			}

		}

		private async Task GetServerPreferencesAsync() {

			try {

				var odata = ClientFactory.CreateClient("OData");
				ServerPreferences = await odata.GetFromJsonAsync<Preferences>($"Preferences/{User}") ?? ServerPreferences;

			} catch {

				ServerPreferences = new();

			}

		}

		private async Task InitializeLocalUserAsync() {

			await GetLocalUserAsync();
			CurrentUser = LocalUser;

		}

		private async Task InitializeServerUserAsync() {

			await GetServerUserAsync();
			CurrentUser = ServerUser;

		}

		private async Task InitializeGraphUserAsync() {

			await GetGraphUserAsync();
			CurrentUser = GraphUser;
			CurrentUser.Photo = UserPhoto == null ? CurrentUser.Photo : "data:image/jpeg;base64," + Convert.ToBase64String(UserPhoto);

		}

		private async Task InitializeLocalPreferencesAsync() {

			await GetLocalPreferencesAsync();
			Preferences = LocalPreferences;

		}

		private async Task InitializeServerPreferencesAsync() {

			await GetServerPreferencesAsync();
			Preferences = ServerPreferences;

		}

		private async Task SaveLocalUserAsync() {

			if (CurrentUser is not null) {

				await LocalStorage.SetItemAsync("CurrentUser", CurrentUser);

			}

		}

		private async Task SaveServerUserAsync() {

			if (CurrentUser is not null) {

				var odata = ClientFactory.CreateClient("OData");
				var endpoint = new Uri(odata.BaseAddress!, $"User/{Guid}");
				var message = new HttpRequestMessage(HttpMethod.Put, endpoint) {
					Content = new StringContent(ODataJsonSerializer.Serialize(CurrentUser), Encoding.UTF8, "application/json")
				};

				var response = await odata.SendAsync(message);
				var userinfo = await HttpResponseMessageExtensions.ReadAsync<UserInfo>(response);

			}

		}

		private async Task SaveLocalPreferencesAsync() {

			if (Preferences is not null) {

				await LocalStorage.SetItemAsync("Preferences", Preferences);

			}

		}

		private async Task SaveServerPreferencesAsync() {

			if (Preferences is not null) {

				var odata = ClientFactory.CreateClient("OData");
				var endpoint = new Uri(odata.BaseAddress!, $"Preferences/{User}");
				var message = new HttpRequestMessage(HttpMethod.Put, endpoint) {
					Content = new StringContent(ODataJsonSerializer.Serialize(CurrentUser), Encoding.UTF8, "application/json")
				};

				await odata.SendAsync(message);

			}

		}

		public async Task SaveUserAsync(bool local = true, bool server = true) {

			try {

				if (local) await SaveLocalUserAsync();
				if (server) await SaveServerUserAsync();

			} catch (Exception ex) {

				Console.WriteLine("An error ocurred while saving user.");
				Console.WriteLine(ex.Message);

			}

		}

		public async Task SavePreferencesAsync(bool local = true, bool server = true) {

			try {

				if (local) await SaveLocalPreferencesAsync();
				if (server) await SaveServerPreferencesAsync();

			} catch (Exception ex) {

				Console.WriteLine("An error ocurred while saving preferences.");
				Console.WriteLine(ex.Message);

			}

		}

		public async Task ClearLocalUserAsync(bool user = true, bool lastfetch = true, bool preferences = true) {

			if (user) await LocalStorage.RemoveItemAsync("CurrentUser");
			if (lastfetch) await LocalStorage.RemoveItemAsync("LastFetched");
			if (preferences) await LocalStorage.RemoveItemAsync("Preferences");

		}

		public async Task FecthUserAsync(bool force = false) {

			await GetFetchedAsync();
			await InitializeLocalUserAsync();

			if (LocalUser.Id == 0) force = true;
			if (LocalUser.Guid != Guid) force = true;
			if (LocalUser.Role != Role) force = true;

			if (DateTime.UtcNow > LastFetched.AddHours(24) || force) {

				await InitializeServerUserAsync();
				await InitializeGraphUserAsync();
				await SaveServerUserAsync();

				User = ServerUser.Id;
				InitializeUser();

				await SaveLocalUserAsync();
				await SetFetchedAsync();

			} else {

				User = LocalUser.Id;
				InitializeUser();

			}

			await InitializeLocalPreferencesAsync();
			await InitializeServerPreferencesAsync();
			await SetThemeAsync(Preferences.Theme, false);
			await SetLanguageAsync(Preferences.Language, false);

			//InitializeUser();
			//await SavePreferencesAsync(true, true);

		}

		public async Task SetThemeAsync(string? theme, bool save = true) {

			if (Preferences.Theme != theme) {

				Preferences.Theme = theme;
				await JSRuntime.InvokeVoidAsync("applyTheme", theme);
				await SavePreferencesAsync(true, save);

			}

		}

		public async Task SetLanguageAsync(string? language, bool save = true) {

			if (Preferences.Language != language) {

				CultureInfo culture;
				Preferences.Language = language;
				culture = new CultureInfo(Preferences.Language ?? "pt");
				CultureInfo.DefaultThreadCurrentCulture = culture;
				CultureInfo.DefaultThreadCurrentUICulture = culture;
				await SavePreferencesAsync(true, save);

			}

		}

	}

}