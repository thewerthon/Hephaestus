using Radzen;
using Frontend;
using Blazored.LocalStorage;
using Blazored.SessionStorage;
using Microsoft.AspNetCore.Components.Web;
using Microsoft.AspNetCore.Components.WebAssembly.Authentication;
using Microsoft.AspNetCore.Components.WebAssembly.Hosting;
using Frontend.Application.Services.Account;
using Frontend.Application.Services.Version;
using Frontend.Application.Services.Graph;
using System.Globalization;
using Microsoft.JSInterop;

// WebAssembly Host Builder
var builder = WebAssemblyHostBuilder.CreateDefault(args);
builder.RootComponents.Add<App>("#app");
builder.RootComponents.Add<HeadOutlet>("head::after");

// Radzen Components Service
builder.Services.AddRadzenComponents();

// LocalStorage and SessionStorage Services
builder.Services.AddBlazoredLocalStorage();
builder.Services.AddBlazoredSessionStorage();

// AzureAD Authentication Service
var scope = builder.Configuration["AzureAd:Scope"] ?? string.Empty;
builder.Services.AddMsalAuthentication<RemoteAuthenticationState, AccountUser>(options => {
	builder.Configuration.Bind("AzureAd", options.ProviderOptions.Authentication);
	options.ProviderOptions.DefaultAccessTokenScopes.Add(scope);
	options.ProviderOptions.Cache.CacheLocation = "localStorage";
	options.ProviderOptions.LoginMode = "redirect";
	options.UserOptions.RoleClaim = "role";
}).AddAccountClaimsPrincipalFactory<RemoteAuthenticationState, AccountUser, AccountFactory>();

// HttpClient Service for Backend API
builder.Services.AddHttpClient("Backend.ServerAPI", client => client.BaseAddress = new Uri(builder.HostEnvironment.BaseAddress)).AddHttpMessageHandler<BaseAddressAuthorizationMessageHandler>();
builder.Services.AddScoped(sp => sp.GetRequiredService<IHttpClientFactory>().CreateClient("Backend.ServerAPI"));

// HttpClient Service for MicrosoftGraph API
var baseUrl = builder.Configuration.GetSection("MicrosoftGraph")["BaseUrl"] ?? string.Empty;
var scopes = builder.Configuration.GetSection("MicrosoftGraph")["Scopes"] ?? string.Empty;
builder.Services.AddTransient<GraphService>();
builder.Services.AddHttpClient("GraphAPI", client => client.BaseAddress = new Uri(baseUrl)).AddHttpMessageHandler<GraphService>();

// Logging Configuration
builder.Logging.SetMinimumLevel(LogLevel.Warning);

// Version Service
builder.Services.AddScoped<VersionService>();

// Localization Service
builder.Services.AddLocalization();

// Build Host
var host = builder.Build();

// Get Culture
CultureInfo culture;
var js = host.Services.GetRequiredService<IJSRuntime>();
var lang = await js.InvokeAsync<string>("getLang") ?? "pt-BR";
culture = new CultureInfo(lang);

// Set Culture
await js.InvokeVoidAsync("setLang", lang);
CultureInfo.DefaultThreadCurrentCulture = culture;
CultureInfo.DefaultThreadCurrentUICulture = culture;

// Run Host
await host.RunAsync();