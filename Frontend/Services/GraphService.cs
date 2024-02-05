using Microsoft.AspNetCore.Components;
using Microsoft.AspNetCore.Components.WebAssembly.Authentication;

<<<<<<<< HEAD:Frontend/Services/GraphService.cs
namespace Hephaestus.Frontend.Services {
========
namespace Frontend.Application.Services {
>>>>>>>> main:Frontend/Application/Services/GraphService.cs

	public class GraphService : AuthorizationMessageHandler {

		public GraphService(IAccessTokenProvider provider, NavigationManager navigator, IConfiguration config) : base(provider, navigator) {

<<<<<<<< HEAD:Frontend/Services/GraphService.cs
			var url = config.GetValue<string>("MicrosoftGraph:BaseUrl");
			var scopes = config.GetSection("MicrosoftGraph:Scopes").Get<List<string>>();
			ConfigureHandler(authorizedUrls: new[] { url ?? string.Empty }, scopes: scopes ?? []);
========
			string? baseUrl = config.GetValue<string>("MicrosoftGraph:BaseUrl");
			List<string>? scopes = config.GetSection("MicrosoftGraph:Scopes").Get<List<string>>();
			ConfigureHandler(authorizedUrls: new[] { baseUrl ?? string.Empty }, scopes: scopes ?? []);
>>>>>>>> main:Frontend/Application/Services/GraphService.cs

		}

	}

}