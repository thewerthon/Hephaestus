﻿using System.Net.Http.Json;
using Microsoft.JSInterop;
using Blazored.SessionStorage;
using Hephaestus.Architect.Models;

namespace Hephaestus.Frontend.Services {

	public class VersionService(HttpClient httpClient, ISessionStorageService sessionStorage, IJSRuntime jsRuntime) {

		private readonly HttpClient HttpClient = httpClient;
		private readonly ISessionStorageService SessionStorage = sessionStorage;
		private readonly IJSRuntime JSRuntime = jsRuntime;

		public DateTime UpdateChecked = DateTime.UtcNow;
		public Architect.Models.Version LocalVersion = new();
		public Architect.Models.Version ServerVersion = new();
		public bool UpdateAvailable = false;
		public bool UpdateDismissed = false;
		public bool UpdateForced = false;

		public static Architect.Models.Version GetLocalVersion() {
			var localVersion = new Architect.Models.Version();
			return localVersion;
		}

		public async Task<Architect.Models.Version> GetServerVersionAsync() {
			var serverVersion = await HttpClient.GetFromJsonAsync<Architect.Models.Version>("api/version");
			return serverVersion ?? new() { Build = 0, Forced = 0, Name = "Unknow" };
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