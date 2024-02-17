using System.Security.Claims;

namespace Hephaestus.Frontend.Services {

	public class UserService(IHttpClientFactory client, ILocalStorageService storage, IJSRuntime runtime) {

		private readonly IHttpClientFactory ClientFactory = client;
		private readonly ILocalStorageService LocalStorage = storage;
		private readonly IJSRuntime JSRuntime = runtime;

		public int User = 1;
		public string? Guid;
		public string? Role;

		public User CurrentUser = new();
		public Preferences Preferences = new();
		public ClaimsPrincipal Claims = new();
		public bool Initialized = false;

		private User LocalUser = new();
		private User ServerUser = new();
		private GraphUser GraphUser = new();
		private Preferences LocalPreferences = new();
		private Preferences ServerPreferences = new();
		private DateTime LastFetched = default;
		private byte[]? UserPhoto;

		public bool IsAdmin() {

			return Claims.IsInRole("System.Admin");

		}

		public bool IsModder() {

			return Claims.IsInRole("System.Admin") || Claims.IsInRole("System.Member");

		}

		public bool IsInRole(string role) {

			return Claims.IsInRole(role);

		}

		public bool IsAuthenticated() {

			return Claims.Identity?.IsAuthenticated ?? false;

		}

		private void SetCurrentUser() {

			CurrentUser.Id = User;
			CurrentUser.Guid = Guid ?? string.Empty;
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

		public async Task GetLocalUserAsync() {

			try {

				LocalUser = await LocalStorage.GetItemAsync<User?>("CurrentUser") ?? new();

			} catch {

				await LocalStorage.RemoveItemAsync("CurrentUser");
				LocalUser = new();

			}

		}

		public async Task GetServerUserAsync() {

			try {

				var odata = ClientFactory.CreateClient("OData");
				var result = await odata.GetFromJsonAsync<User>($"User/{Guid}");
				ServerUser = result ?? ServerUser;

			} catch {

				ServerUser = new();

			}

		}

		public async Task GetGraphUserAsync() {

			try {

				Console.WriteLine("Fetching user from Microsoft Graph");
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

		public async Task GetLocalPreferencesAsync() {

			try {

				LocalPreferences = await LocalStorage.GetItemAsync<Preferences?>("Preferences") ?? new();

			} catch {

				await LocalStorage.RemoveItemAsync("Preferences");
				LocalPreferences = new();

			}

		}

		public async Task GetServerPreferencesAsync() {

			try {

				var odata = ClientFactory.CreateClient("OData");
				var result = await odata.GetFromJsonAsync<Preferences>($"Preferences/{User}");
				ServerPreferences = result ?? ServerPreferences;

			} catch {

				ServerPreferences = new();

			}

		}

		private async Task SaveLocalUserAsync() {

			if (CurrentUser is not null) {

				SetCurrentUser();
				await LocalStorage.SetItemAsync("CurrentUser", CurrentUser);
				LocalUser = CurrentUser;

			}

		}

		private async Task SaveServerUserAsync() {

			if (CurrentUser is not null) {

				SetCurrentUser();

				var odata = ClientFactory.CreateClient("OData");
				var endpoint = new Uri(odata.BaseAddress!, $"Users/{Guid}?user={User}");
				var message = new HttpRequestMessage(HttpMethod.Put, endpoint) {
					Content = new StringContent(ODataJsonSerializer.Serialize(CurrentUser), Encoding.UTF8, "application/json")
				};

				var response = await odata.SendAsync(message);
				var user = await HttpResponseMessageExtensions.ReadAsync<User>(response);
				if (user != null) ServerUser = user;

			}

		}

		private async Task SaveLocalPreferencesAsync() {

			if (Preferences is not null) {

				SetCurrentUser();
				await LocalStorage.SetItemAsync("Preferences", Preferences);
				LocalPreferences = Preferences;

			}

		}

		private async Task SaveServerPreferencesAsync() {

			if (Preferences is not null) {

				SetCurrentUser();
				var odata = ClientFactory.CreateClient("OData");
				var endpoint = new Uri(odata.BaseAddress!, $"Preferences/{User}");
				var message = new HttpRequestMessage(HttpMethod.Put, endpoint) {
					Content = new StringContent(ODataJsonSerializer.Serialize(Preferences), Encoding.UTF8, "application/json")
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

		public async Task InitUserAsync(bool force = false) {

			await GetLocalUserAsync();
			CurrentUser = LocalUser;
			User = LocalUser.Id > 1 ? LocalUser.Id : 1;

			if (CurrentUser.Id <= 1) force = true;
			if (CurrentUser.Guid != Guid) force = true;
			if (CurrentUser.Role != Role) force = true;

			if (force) {
				Initialized = true;
				await FecthUserAsync(true);
				await FecthPreferencesAsync();
			}

		}

		public async Task FecthUserAsync(bool force = false) {

			await GetFetchedAsync();

			if (DateTime.UtcNow > LastFetched.AddHours(24) || force) {

				try {

					await GetGraphUserAsync();
					CurrentUser = GraphUser;
					CurrentUser.Photo
						= UserPhoto == null
						? CurrentUser.Photo
						: "data:image/jpeg;base64,"
						+ Convert.ToBase64String(UserPhoto);

					await SaveServerUserAsync();
					User = ServerUser.Id > 1 ? ServerUser.Id : 1;

					await SaveLocalUserAsync();
					await SetFetchedAsync();

				} catch (Exception ex) {

					Console.WriteLine("An error ocurred while fetching user.");
					Console.WriteLine(ex.Message);

				}

			} else {

				User = LocalUser.Id > 1 ? LocalUser.Id : 1;

			}

		}

		public async Task FecthPreferencesAsync() {

			await GetLocalPreferencesAsync();
			await GetServerPreferencesAsync();

			if (ServerPreferences.Id > 0) {

				Preferences = ServerPreferences;
				await SetThemeAsync(Preferences.Theme, false);
				await SetLanguageAsync(Preferences.Language, false);
				await SavePreferencesAsync(true, false);

			} else {

				Preferences = LocalPreferences;
				await SavePreferencesAsync(true, true);

			}

		}

		public async Task ToggleThemeAsync(bool save = true) {

			var theme = await JSRuntime.InvokeAsync<string>("toggleTheme");

			Preferences.Theme = theme;
			LocalPreferences.Theme = theme;
			await SavePreferencesAsync(true, save);

		}

		public async Task SetThemeAsync(string? theme, bool save = true, bool force = false) {

			if (LocalPreferences.Theme != theme || force) {

				Preferences.Theme = theme;
				LocalPreferences.Theme = theme;
				await JSRuntime.InvokeVoidAsync("applyTheme", theme);
				await SavePreferencesAsync(true, save);

			}

		}

		public async Task SetLanguageAsync(string? language, bool save = true, bool force = false) {

			if (LocalPreferences.Language != language || force) {

				Preferences.Language = language;
				LocalPreferences.Language = language;
				await SavePreferencesAsync(true, save);

			}

		}

	}

}