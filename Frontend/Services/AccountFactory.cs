using System.Security.Claims;
using Microsoft.AspNetCore.Components.WebAssembly.Authentication;
using Microsoft.AspNetCore.Components.WebAssembly.Authentication.Internal;

namespace Hephaestus.Frontend.Application.Services;

public class AccountFactory(IAccessTokenProviderAccessor accessor, UserService service) : AccountClaimsPrincipalFactory<RemoteUser>(accessor) {

	private readonly UserService UserService = service;

	public override async ValueTask<ClaimsPrincipal> CreateUserAsync(RemoteUser account, RemoteAuthenticationUserOptions options) {

		var user = await base.CreateUserAsync(account, options);

		if (user.Identity is not null && user.Identity.IsAuthenticated) {

			var identity = (ClaimsIdentity)user.Identity;
			account?.Roles?.ForEach((role) => { identity.AddClaim(new Claim("role", role)); });

			UserService.Claims = user;
			UserService.Guid = identity.FindFirst("oid")?.Value ?? "";
			UserService.Role = identity.FindFirst("role")?.Value ?? "System.User";
			await UserService.InitUserAsync();

		}

		return user;

	}

}