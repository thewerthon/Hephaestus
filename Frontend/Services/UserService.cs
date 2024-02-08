﻿using Hephaestus.Architect.Models;
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

		private bool Fetching = false;
		private AppUser LocalUser = new();
		private UserInfo ServerUser = new();
		private GraphUser GraphUser = new();
		private AppPreferences LocalPreferences = new();
		private Preferences ServerPreferences = new();
		private DateTime LastFetched = default;
		private byte[]? UserPhoto;

		private void SetCurrentUser() {

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

		public async Task GetLocalUserAsync() {

			try {

				LocalUser = await LocalStorage.GetItemAsync<AppUser?>("CurrentUser") ?? new();

			} catch {

				await LocalStorage.RemoveItemAsync("CurrentUser");
				LocalUser = new();

			}

		}

		public async Task GetServerUserAsync() {

			try {

				var odata = ClientFactory.CreateClient("OData");
				ServerUser = await odata.GetFromJsonAsync<UserInfo>($"User/{Guid}") ?? ServerUser;

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

				LocalPreferences = await LocalStorage.GetItemAsync<AppPreferences?>("Preferences") ?? new();

			} catch {

				await LocalStorage.RemoveItemAsync("Preferences");
				LocalPreferences = new();

			}

		}

		public async Task GetServerPreferencesAsync() {

			try {

				var odata = ClientFactory.CreateClient("OData");
				ServerPreferences = await odata.GetFromJsonAsync<Preferences>($"Preferences/{User}") ?? ServerPreferences;

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
				var endpoint = new Uri(odata.BaseAddress!, $"User/{Guid}");
				var message = new HttpRequestMessage(HttpMethod.Put, endpoint) {
					Content = new StringContent(ODataJsonSerializer.Serialize(CurrentUser), Encoding.UTF8, "application/json")
				};

				var response = await odata.SendAsync(message);
				var userinfo = await HttpResponseMessageExtensions.ReadAsync<UserInfo>(response);
				if (userinfo != null) ServerUser = userinfo;

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
				var endpoint = new Uri(odata.BaseAddress!, $"Preferences/{User}?response=false");
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

		public async Task FecthUserAsync(bool force = false) {

			await GetFetchedAsync();
			await GetLocalUserAsync();
			CurrentUser = LocalUser;

			if (CurrentUser.Id == 0) force = true;
			if (CurrentUser.Guid != Guid) force = true;
			if (CurrentUser.Role != Role) force = true;

			if (DateTime.UtcNow > LastFetched.AddHours(24) || force) {

				if (!Fetching) {

					Fetching = true;

					try {

						await GetGraphUserAsync();
						CurrentUser = GraphUser;
						CurrentUser.Photo
							= UserPhoto == null
							? CurrentUser.Photo
							: "data:image/jpeg;base64,"
							+ Convert.ToBase64String(UserPhoto);

						await SaveServerUserAsync();
						User = ServerUser.Id;

						await SaveLocalUserAsync();
						await SetFetchedAsync();

					} catch (Exception ex) {

						Console.WriteLine("An error ocurred while fetching user.");
						Console.WriteLine(ex.Message);

					} finally {

						Fetching = false;

					}

				}

			} else {

				User = LocalUser.Id;

			}

			await GetLocalPreferencesAsync();
			await GetServerPreferencesAsync();

			if (ServerPreferences.Id > 0) {

				Preferences = ServerPreferences;
				await SetThemeAsync(Preferences.Theme, false);
				await SetLanguageAsync(Preferences.Language, false);

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

		public async Task SetThemeAsync(string? theme, bool save = true) {

			if (LocalPreferences.Theme != theme) {

				Preferences.Theme = theme;
				LocalPreferences.Theme = theme;
				await JSRuntime.InvokeVoidAsync("applyTheme", theme);
				await SavePreferencesAsync(true, save);

			}

		}

		public async Task SetLanguageAsync(string? language, bool save = true) {

			if (LocalPreferences.Language != language) {

				Preferences.Language = language;
				LocalPreferences.Theme = language;
				await SavePreferencesAsync(true, save);

			}

		}

	}

}