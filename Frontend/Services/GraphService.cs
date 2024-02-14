using Microsoft.AspNetCore.Components;
using Microsoft.AspNetCore.Components.WebAssembly.Authentication;

namespace Hephaestus.Frontend.Services {

	public class GraphService : AuthorizationMessageHandler {

		public GraphService(IAccessTokenProvider provider, NavigationManager navigator, IConfiguration config) : base(provider, navigator) {

			var url = config.GetValue<string>("MicrosoftGraph:BaseUrl");
			var scopes = config.GetSection("MicrosoftGraph:Scopes").Get<List<string>>();
			ConfigureHandler(authorizedUrls: [url ?? string.Empty], scopes: scopes ?? []);

		}

	}

}