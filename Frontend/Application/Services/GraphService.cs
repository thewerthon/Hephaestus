using Microsoft.AspNetCore.Components;
using Microsoft.AspNetCore.Components.WebAssembly.Authentication;

namespace Frontend.Application.Services {

	public class GraphService : AuthorizationMessageHandler {

		public GraphService(IAccessTokenProvider provider, NavigationManager navigator, IConfiguration config) : base(provider, navigator) {

			string? baseUrl = config.GetValue<string>("MicrosoftGraph:BaseUrl");
			List<string>? scopes = config.GetSection("MicrosoftGraph:Scopes").Get<List<string>>();
			ConfigureHandler(authorizedUrls: new[] { baseUrl ?? string.Empty }, scopes: scopes ?? []);

		}

	}

}