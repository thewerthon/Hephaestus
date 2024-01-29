using System.Security.Claims;
using Microsoft.AspNetCore.Components.WebAssembly.Authentication;
using Microsoft.AspNetCore.Components.WebAssembly.Authentication.Internal;

namespace Frontend.Application.Services {

	public class AccountFactory(IAccessTokenProviderAccessor accessor) : AccountClaimsPrincipalFactory<AccountUser>(accessor) {

		public override async ValueTask<ClaimsPrincipal> CreateUserAsync(AccountUser account, RemoteAuthenticationUserOptions options) {

			var initialUser = await base.CreateUserAsync(account, options);

			if (initialUser.Identity is not null && initialUser.Identity.IsAuthenticated) {

				var userIdentity = (ClaimsIdentity)initialUser.Identity;

				account?.Roles?.ForEach((role) => {
					userIdentity.AddClaim(new Claim("role", role));
				});

			}

			return initialUser;

		}

	}

}