using Hephaestus.Architect.Models;
using Hephaestus.Backend.Database;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc.Authorization;
using Microsoft.AspNetCore.OData;
using Microsoft.OData.ModelBuilder;
using Microsoft.EntityFrameworkCore;
using Microsoft.Identity.Web;
using Version = Hephaestus.Architect.Models.Version;
using Microsoft.AspNetCore.OData.Routing.Conventions;

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
builder.Services.AddDbContext<DatabaseContext>(options =>
	options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection"))
		.LogTo(s => System.Diagnostics.Debug.WriteLine(s))
);

// OData Models
var models = new ODataConventionModelBuilder();
models.EntitySet<Version>("Versions");
models.EntitySet<UserInfo>("Users");
models.EntitySet<Preferences>("Preferences");

// Razor Pages
builder.Services.AddRazorPages();

// Controllers
builder.Services.AddControllers(options => {
	var policy = new AuthorizationPolicyBuilder().RequireAuthenticatedUser().Build();
	options.Filters.Add(new AuthorizeFilter(policy));
}).AddOData(options => {
	options.Conventions.Remove(options.Conventions.OfType<MetadataRoutingConvention>().First());
	options.AddRouteComponents("odata", models.GetEdmModel()).EnableQueryFeatures().TimeZone = TimeZoneInfo.Utc;
});

// Routing Options
builder.Services.AddRouting(options => {
	options.LowercaseUrls = true;
	options.LowercaseQueryStrings = true;
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