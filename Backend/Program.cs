using Microsoft.Identity.Web;
using Microsoft.AspNetCore.OData;
using Microsoft.OData.ModelBuilder;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.OData.Query.Expressions;
using Microsoft.AspNetCore.Mvc.Authorization;
using Microsoft.OData.UriParser;

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
models.EnumType<YesNo>();
models.EntitySet<UserInfo>("Users");

// Add Entity Sets
//foreach (var entity in DatabaseMappings.EntityMappings) {

//	typeof(ODataConventionModelBuilder)
//		.GetMethod("EntitySet")!
//		.MakeGenericMethod(entity.Type)
//		.Invoke(models, new object[] { entity.Name });

//}

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
	options.AddRouteComponents("odata", models.GetEdmModel(), services => {
		services.AddSingleton<ODataUriResolver>(sp => new StringAsEnumResolver() { EnableCaseInsensitive = true });
		services.AddSingleton<ISearchBinder, SearchBinder>();
	}).EnableQueryFeatures().TimeZone = TimeZoneInfo.Utc;
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
app.MapFallbackToFile("odata/{**slug}", "404");
app.MapFallbackToFile("{**slug}", "index.html");

// Run App
app.Run();