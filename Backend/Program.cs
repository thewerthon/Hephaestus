using Microsoft.Identity.Web;
using Microsoft.AspNetCore.OData;
using Microsoft.OData.ModelBuilder;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.OData.Query.Expressions;
using Microsoft.AspNetCore.Mvc.Authorization;

// WebApplication
var builder = WebApplication.CreateBuilder(args);

// Identity Service
builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
	.AddMicrosoftIdentityWebApi(builder.Configuration.GetSection("AzureAd"));

// Identity Configuration
builder.Services.Configure<JwtBearerOptions>(
	JwtBearerDefaults.AuthenticationScheme, options => {
		options.TokenValidationParameters.NameClaimType = "name";
	}
);

// Database Context
builder.Services.AddDbContext<DatabaseContext>(options => {
	options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection"));
	options.LogTo(message => System.Diagnostics.Debug.WriteLine(message), LogLevel.Information);
});

// OData Models Builder
var models = new ODataConventionModelBuilder();

// Add Entity Sets
foreach (var table in DatabaseMappings.Tables) {
	typeof(ODataConventionModelBuilder)
		.GetMethod("EntitySet")!
		.MakeGenericMethod(table.Type)
		.Invoke(models, [table.Name]);
}

// Razor Pages
builder.Services.AddRazorPages();

// Routing
builder.Services.AddRouting(options => {
	options.LowercaseUrls = true;
	options.LowercaseQueryStrings = true;
});

// Controllers
builder.Services.AddControllers(options => {
	var policy = new AuthorizationPolicyBuilder().RequireAuthenticatedUser().Build();
	options.Filters.Add(new AuthorizeFilter(policy));
}).AddOData(options => {
	options.EnableAttributeRouting = true;
	options.EnableNoDollarQueryOptions = true;
	options.RouteOptions.EnableKeyAsSegment = false;
	options.RouteOptions.EnableDollarValueRouting = true;
	options.RouteOptions.EnableDollarCountRouting = true;
	options.RouteOptions.EnableQualifiedOperationCall = false;
	options.RouteOptions.EnableUnqualifiedOperationCall = true;
	options.RouteOptions.EnableActionNameCaseInsensitive = true;
	options.RouteOptions.EnablePropertyNameCaseInsensitive = true;
	options.RouteOptions.EnableControllerNameCaseInsensitive = true;
	options.AddRouteComponents("odata", models.GetEdmModel(), services => {
		services.AddSingleton<ISearchBinder, SearchBinder>();
	}).EnableQueryFeatures().TimeZone = TimeZoneInfo.Utc;
});

// Output Cache
builder.Services.AddOutputCache(options => {
	options.SizeLimit = 256;
	options.MaximumBodySize = 64;
	options.DefaultExpirationTimeSpan = TimeSpan.FromSeconds(60);
	options.AddPolicy("Default", CachePolicy.Instance);
	options.AddPolicy("NoCache", builder => builder.NoCache());
});

// Application
var app = builder.Build();

// Development Environment
if (app.Environment.IsDevelopment()) {
	app.UseODataRouteDebug();
}

// App Configurations
app.UseHttpsRedirection();
app.UseBlazorFrameworkFiles();
app.UseStaticFiles();
app.UseRouting();
app.UseAuthentication();
app.UseAuthorization();
app.MapRazorPages();
app.MapControllers();
app.UseOutputCache();
app.MapFallbackToFile("app/{**slug}", "404");
app.MapFallbackToFile("odata/{**slug}", "404");
app.MapFallbackToFile("{**slug}", "index.html");

// Run App
app.Run();