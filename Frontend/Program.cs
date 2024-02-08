using Hephaestus.Frontend;
using Microsoft.AspNetCore.Components.Web;
using Microsoft.AspNetCore.Components.WebAssembly.Authentication;
using Microsoft.AspNetCore.Components.WebAssembly.Hosting;
using System.Globalization;

// WebAssembly Host
var builder = WebAssemblyHostBuilder.CreateDefault(args);

// Application
builder.RootComponents.Add<Application>("#app");
builder.RootComponents.Add<HeadOutlet>("head::after");

// Radzen Components
builder.Services.AddRadzenComponents();

// LocalStorage and SessionStorage
builder.Services.AddBlazoredLocalStorage();
builder.Services.AddBlazoredSessionStorage();

// Frontend Services
builder.Services.AddScoped<CursorService>();
builder.Services.AddScoped<DatabaseService>();
builder.Services.AddScoped<VersionService>();
builder.Services.AddScoped<UserService>();

// AzureAD Authentication
var scope = builder.Configuration.GetSection("AzureAd")["Scope"]!;
builder.Services.AddMsalAuthentication<RemoteAuthenticationState, RemoteUser>(options => {
	builder.Configuration.Bind("AzureAd", options.ProviderOptions.Authentication);
	options.ProviderOptions.DefaultAccessTokenScopes.Add(scope);
	options.ProviderOptions.Cache.CacheLocation = "localStorage";
	options.ProviderOptions.LoginMode = "redirect";
	options.UserOptions.RoleClaim = "role";
}).AddAccountClaimsPrincipalFactory<RemoteAuthenticationState, RemoteUser, AccountFactory>();

// HttpClient Service for Backend API
builder.Services.AddHttpClient("Backend", client => client.BaseAddress = new Uri(builder.HostEnvironment.BaseAddress)).AddHttpMessageHandler<BaseAddressAuthorizationMessageHandler>();
builder.Services.AddHttpClient("OData", client => client.BaseAddress = new Uri($"{builder.HostEnvironment.BaseAddress}odata/")).AddHttpMessageHandler<BaseAddressAuthorizationMessageHandler>();
builder.Services.AddScoped(sp => sp.GetRequiredService<IHttpClientFactory>().CreateClient("Backend"));

// HttpClient Service for MicrosoftGraph API
var baseUrl = builder.Configuration.GetSection("MicrosoftGraph")["BaseUrl"]!;
builder.Services.AddTransient<GraphService>();
builder.Services.AddHttpClient("GraphAPI", client => client.BaseAddress = new Uri(baseUrl)).AddHttpMessageHandler<GraphService>();

// Logging Configuration
builder.Logging.SetMinimumLevel(LogLevel.Warning);

// Localization Service
builder.Services.AddLocalization();

// Build Host
var host = builder.Build();

// Get Culture
CultureInfo culture;
var js = host.Services.GetRequiredService<IJSRuntime>();
var lang = await js.InvokeAsync<string>("getLanguage");

// Set Culture
culture = new CultureInfo(lang);
CultureInfo.DefaultThreadCurrentCulture = culture;
CultureInfo.DefaultThreadCurrentUICulture = culture;

// Run Host
await host.RunAsync();