using Microsoft.Identity.Web;
using Microsoft.AspNetCore.OData;
using Microsoft.OData.ModelBuilder;
using Microsoft.AspNetCore.OData.Query.Expressions;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc.Authorization;
using Microsoft.EntityFrameworkCore;
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

// OData Models
var models = new ODataConventionModelBuilder();
foreach (var entity in Mappings.EntityMappings) {

	// Get entity properties
	var tableName = entity.TableName;
	var modelType = entity.ModelType;

	// Use reflection to call EntitySet
	typeof(ODataConventionModelBuilder)
		.GetMethod("EntitySet")!
		.MakeGenericMethod(modelType)
		.Invoke(models, new object[] { tableName });

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
	options.AddRouteComponents("odata", models.GetEdmModel(), services =>
		services.AddSingleton<ISearchBinder, SearchBinder>()
	).EnableQueryFeatures().TimeZone = TimeZoneInfo.Utc;
});

// Application
var app = builder.Build();

// Development Environment
if (app.Environment.IsDevelopment()) { }

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