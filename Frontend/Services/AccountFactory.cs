using System.Security.Claims;
using Microsoft.AspNetCore.Components.WebAssembly.Authentication;
using Microsoft.AspNetCore.Components.WebAssembly.Authentication.Internal;

namespace Hephaestus.Frontend.Services {

	public class AccountFactory(IAccessTokenProviderAccessor accessor, UserService service, NavigationManager navigation) : AccountClaimsPrincipalFactory<RemoteUser>(accessor) {

		private readonly UserService UserService = service;

		public override async ValueTask<ClaimsPrincipal> CreateUserAsync(RemoteUser account, RemoteAuthenticationUserOptions options) {

			var user = await base.CreateUserAsync(account, options);

			if (user.Identity is not null && user.Identity.IsAuthenticated) {

				var identity = (ClaimsIdentity)user.Identity;
				account?.Roles?.ForEach((role) => { identity.AddClaim(new Claim("role", role)); });

				UserService.Claims = user;
				await UserService.FecthUserAsync(navigation.Uri.Contains("/auth"));

			}

			return user;

		}

	}

}