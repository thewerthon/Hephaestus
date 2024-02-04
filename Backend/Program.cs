using Microsoft.Identity.Web;
using Microsoft.AspNetCore.OData;
using Microsoft.OData.ModelBuilder;
using Microsoft.AspNetCore.OData.Query.Expressions;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc.Authorization;
using Microsoft.EntityFrameworkCore;
using Hephaestus.Backend.Controllers;
using Hephaestus.Backend.Database;
using Hephaestus.Backend.Mappings;

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

// Add Singletons
foreach (var singleton in Mappings.SingletonMappings) {

	// Get singleton properties
	var name = singleton.Name;
	var type = singleton.Type;

	// Use reflection to call Singleton
	typeof(ODataConventionModelBuilder)
		.GetMethod("Singleton")!
		.MakeGenericMethod(type)
		.Invoke(models, new object[] { name });

}

// Add Entity Sets
foreach (var entity in Mappings.EntityMappings) {

	// Get entity properties
	var name = entity.Name;
	var type = entity.Type;

	// Use reflection to call EntitySet
	typeof(ODataConventionModelBuilder)
		.GetMethod("EntitySet")!
		.MakeGenericMethod(type)
		.Invoke(models, new object[] { name });

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
	options.RouteOptions.EnableKeyAsSegment = false;
	options.RouteOptions.EnableDollarValueRouting = true;
	options.RouteOptions.EnableDollarCountRouting = true;
	options.RouteOptions.EnablePropertyNameCaseInsensitive = true;
	options.RouteOptions.EnableControllerNameCaseInsensitive = true;
	options.AddRouteComponents("odata", models.GetEdmModel(), services =>
		services.AddSingleton<ISearchBinder, SearchBinder>()
	).EnableQueryFeatures().TimeZone = TimeZoneInfo.Utc;
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
app.MapFallbackToFile(
	"{*path:regex(^(?!odata).*$)}",
	"index.html"
);

// Run App
app.Run();