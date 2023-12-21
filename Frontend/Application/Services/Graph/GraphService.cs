using Microsoft.AspNetCore.Components;
using Microsoft.AspNetCore.Components.WebAssembly.Authentication;

namespace Frontend.Application.Services.Graph {

	public class GraphService : AuthorizationMessageHandler {

		public GraphService(IAccessTokenProvider provider, NavigationManager navigator, IConfiguration config) : base(provider, navigator) {

			string? baseUrl = config.GetSection("MicrosoftGraph")["BaseUrl"];
			List<string>? scopes = config.GetSection("MicrosoftGraph:Scopes").Get<List<string>>();
			ConfigureHandler(authorizedUrls: new[] { baseUrl ?? string.Empty }, scopes: scopes ?? []);

		}

	}

}