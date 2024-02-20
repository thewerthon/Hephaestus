namespace Hephaestus.Frontend.Application.Services;

public class VersionService(HttpClient httpClient, ILocalStorageService localStorage, ISessionStorageService sessionStorage, IJSRuntime jsRuntime) {

	private readonly HttpClient HttpClient = httpClient;
	private readonly ILocalStorageService LocalStorage = localStorage;
	private readonly ISessionStorageService SessionStorage = sessionStorage;
	private readonly IJSRuntime JSRuntime = jsRuntime;

	public DateTime UpdateChecked = DateTime.UtcNow;
	public Version LocalVersion = new();
	public Version ServerVersion = new();
	public bool UpdateAvailable = false;
	public bool UpdateDismissed = false;
	public bool UpdateForced = false;

	public static Version GetLocalVersion() {

		var localVersion = new Version();
		return localVersion;

	}

	public async Task<Version> GetServerVersionAsync() {

		try {

			var serverVersion = await HttpClient.GetFromJsonAsync<Version>("app/version");
			return serverVersion ?? new() { Build = 0, Force = 0, Name = "Unknow" };

		} catch (Exception) {

			return null!;

		}

	}

	public async Task CheckForUpdatesAsync() {

		var defaultDate = new DateTime(1994, 03, 09, 16, 00, 00);
		UpdateChecked = await SessionStorage.GetItemAsync<DateTime?>("UpdateChecked") ?? defaultDate;
		UpdateAvailable = await SessionStorage.GetItemAsync<bool>("UpdateAvailable");
		UpdateForced = await SessionStorage.GetItemAsync<bool>("UpdateForced");

		if (!UpdateAvailable && DateTime.UtcNow >= UpdateChecked.AddMinutes(15)) {

			LocalVersion = GetLocalVersion();
			ServerVersion = await GetServerVersionAsync();
			await LocalStorage.SetItemAsync("CurrentVersion", LocalVersion);
			await SessionStorage.SetItemAsync("UpdateChecked", DateTime.UtcNow);

			if (LocalVersion != null && ServerVersion != null && LocalVersion.Build < ServerVersion.Build) {

				if (LocalVersion.Force < ServerVersion.Force) {

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