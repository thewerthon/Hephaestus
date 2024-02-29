using System.Globalization;
using System.Security.Claims;
using Microsoft.AspNetCore.Components.WebAssembly.Authentication;
using Microsoft.AspNetCore.Components.WebAssembly.Authentication.Internal;

namespace Hephaestus.Frontend.Application.Services;

public class AccountFactory(IAccessTokenProviderAccessor accessor, UserService service, UsageLogService usage, NavigationManager navigator) : AccountClaimsPrincipalFactory<RemoteUser>(accessor) {

	private readonly UserService UserService = service;
	private readonly UsageLogService UsageLogService = usage;
	private readonly NavigationManager NavigationManager = navigator;

	public override async ValueTask<ClaimsPrincipal> CreateUserAsync(RemoteUser account, RemoteAuthenticationUserOptions options) {

		var user = await base.CreateUserAsync(account, options);

		if (user.Identity is not null && user.Identity.IsAuthenticated) {

			var identity = (ClaimsIdentity)user.Identity;
			account?.Roles?.ForEach((role) => { identity.AddClaim(new Claim("role", role)); });

			UserService.Claims = user;
			UserService.Guid = identity.FindFirst("oid")?.Value ?? "";
			UserService.Role = identity.FindFirst("role")?.Value ?? "System.User";

			await UserService.InitUserAsync();
			await UserService.FecthPreferencesAsync();

			var currentCulture = CultureInfo.DefaultThreadCurrentUICulture?.ToString();
			var userCulture = UserService.Preferences.Language ?? currentCulture;

			if (currentCulture != userCulture) {

				NavigationManager.NavigateTo(NavigationManager.Uri, forceLoad: true);

			}

			if (!NavigationManager.Uri.Contains("auth")) {

				_ = UsageLogService.LogLoginAsync();

			}

		}

		return user;

	}

}