using Hephaestus.Architect.Models;
using Hephaestus.Backend.Database;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc.Authorization;
using Microsoft.AspNetCore.OData;
using Microsoft.EntityFrameworkCore;
using Microsoft.Identity.Web;
using Microsoft.OData.ModelBuilder;
using Version = Hephaestus.Architect.Models.Version;

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
				options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));

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

// OData Requests
app.Use(async (context, next) => {
	if (context.Request.Path.StartsWithSegments("/odata")) {
		context.Response.StatusCode = 404;
	} else {
		await next();
	}
});

// App Configurations
app.UseHttpsRedirection();
app.UseBlazorFrameworkFiles();
app.UseStaticFiles();
app.UseRouting();
app.UseAuthentication();
app.UseAuthorization();
app.MapRazorPages();
app.MapControllers();
app.MapFallbackToFile("index.html");

// Run App
app.Run();