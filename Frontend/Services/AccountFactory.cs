﻿using System.Security.Claims;
using Microsoft.AspNetCore.Components.WebAssembly.Authentication;
using Microsoft.AspNetCore.Components.WebAssembly.Authentication.Internal;

namespace Hephaestus.Frontend.Services {

	public class AccountFactory(IAccessTokenProviderAccessor accessor, UserService service) : AccountClaimsPrincipalFactory<RemoteUser>(accessor) {

		private readonly UserService Service = service;

		public override async ValueTask<ClaimsPrincipal> CreateUserAsync(RemoteUser account, RemoteAuthenticationUserOptions options) {

			var user = await base.CreateUserAsync(account, options);

			if (user.Identity is not null && user.Identity.IsAuthenticated) {

				var userIdentity = (ClaimsIdentity)user.Identity;

				account?.Roles?.ForEach((role) => {

					userIdentity.AddClaim(new Claim("role", role));

				});

			}

			Service.UserClaims = user;
			return user;

		}

	}

}