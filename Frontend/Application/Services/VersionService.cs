using System.Net.Http.Json;
using Microsoft.JSInterop;
using Blazored.SessionStorage;
using Architect.Application.Models;

namespace Frontend.Application.Services {

	public class VersionService(HttpClient HttpClient, ISessionStorageService SessionStorage, IJSRuntime JSRuntime) {

		private readonly HttpClient HttpClient = HttpClient;
		private readonly ISessionStorageService SessionStorage = SessionStorage;
		private readonly IJSRuntime JSRuntime = JSRuntime;

		public DateTime UpdateChecked = DateTime.UtcNow;
		public VersionInfo LocalVersion = new();
		public VersionInfo ServerVersion = new();
		public bool UpdateAvailable = false;
		public bool UpdateDismissed = false;
		public bool UpdateForced = false;

		public static VersionInfo GetLocalVersion() {
			var localVersion = new VersionInfo();
			return localVersion;
		}

		public async Task<VersionInfo> GetServerVersionAsync() {
			var serverVersion = await HttpClient.GetFromJsonAsync<VersionInfo>("api/application/versioninfo");
			return serverVersion ?? new() { Build = 0, Forced = 0, Version = "Unknow" };
		}

		public async Task CheckForUpdatesAsync() {

			var defaultDate = new DateTime(1994, 03, 09, 16, 00, 00);
			UpdateChecked = await SessionStorage.GetItemAsync<DateTime?>("UpdateChecked") ?? defaultDate;
			UpdateAvailable = await SessionStorage.GetItemAsync<bool>("UpdateAvailable");
			UpdateForced = await SessionStorage.GetItemAsync<bool>("UpdateForced");

			if (!UpdateAvailable && DateTime.UtcNow >= UpdateChecked.AddMinutes(10)) {

				LocalVersion = GetLocalVersion();
				ServerVersion = await GetServerVersionAsync();
				await SessionStorage.SetItemAsync("UpdateChecked", DateTime.UtcNow);

				if (LocalVersion != null && ServerVersion != null && LocalVersion.Build < ServerVersion.Build) {

					if (LocalVersion.Forced < ServerVersion.Forced) {
						await SessionStorage.SetItemAsync("UpdateForced", true);
						UpdateForced = true;
					}

					await SessionStorage.SetItemAsync("UpdateAvailable", true);
					UpdateAvailable = true;
					UpdateDismissed = false;

				}

			}

			if (UpdateAvailable) {
				await JSRuntime.InvokeVoidAsync("newUpdate");
			}

		}

	}

}