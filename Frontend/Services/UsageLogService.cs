using System;

namespace Hephaestus.Frontend.Application.Services;

public class UsageLogService(UserService user, VersionService version, ILocalStorageService storage, IHttpClientFactory client, IJSRuntime runtime) {

	private readonly UserService UserService = user;
	private readonly VersionService VersionService = version;
	private readonly ILocalStorageService LocalStorage = storage;
	private readonly IHttpClientFactory ClientFactory = client;
	private readonly IJSRuntime JSRuntime = runtime;

	public UsageLog DefaultInfo = new();
	private DateTime LastLogged = default;

	public async Task LogAsync(string action, string? details = default) {

		await GetDefaultInfoAsync();
		DefaultInfo.Action = action;
		DefaultInfo.Details = details;
		await PostUsageLogAsync();

	}

	public async Task LogLoginAsync() {

		await GetLoggedAsync();
		await GetDefaultInfoAsync();

		if (DateTime.UtcNow > LastLogged.AddHours(6)) {

			DefaultInfo.Action = "UserLogin";
			await PostUsageLogAsync();
			await SetLoggedAsync();

		}

	}

	private async Task SetLoggedAsync() {

		await LocalStorage.SetItemAsync("LastLogged", DateTime.UtcNow);

	}

	private async Task GetLoggedAsync() {

		try {

			LastLogged = await LocalStorage.GetItemAsync<DateTime?>("LastLogged") ?? default;

		} catch {

			await LocalStorage.RemoveItemAsync("LastLogged");
			LastLogged = default;

		}

	}

	private async Task GetDefaultInfoAsync() {

		DefaultInfo = await JSRuntime.InvokeAsync<UsageLog>("getBrowserInfo");

		DefaultInfo.Id = 0;
		DefaultInfo.DateTime = DateTime.UtcNow;
		DefaultInfo.AppBuild = VersionService.LocalVersion.Build;
		DefaultInfo.AppVersion = VersionService.LocalVersion.Name;
		DefaultInfo.User = UserService.CurrentUser.Id;
		DefaultInfo.UserTheme = UserService.Preferences.Theme;
		DefaultInfo.UserLanguage = UserService.Preferences.Language;

	}

	private async Task PostUsageLogAsync() {

		var odata = ClientFactory.CreateClient("OData");
		var endpoint = new Uri(odata.BaseAddress!, $"UsageLogs");
		var message = new HttpRequestMessage(HttpMethod.Post, endpoint) {
			Content = new StringContent(ODataJsonSerializer.Serialize(DefaultInfo), Encoding.UTF8, "application/json")
		};

		await odata.SendAsync(message);

	}

}