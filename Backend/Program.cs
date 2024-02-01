using Hephaestus.Architect.Models;
using Hephaestus.Backend.Database;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc.Authorization;
using Microsoft.AspNetCore.OData;
using Microsoft.EntityFrameworkCore;
using Microsoft.Identity.Web;
using Microsoft.OData.ModelBuilder;
using Microsoft.OpenApi.Models;
using Version = Hephaestus.Architect.Models.Version;

// WebApplication Builder
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

// Create OData Model
var models = new ODataConventionModelBuilder();
models.EntitySet<Version>("Versions");
models.EntitySet<UserInfo>("Users");
models.EntitySet<Preferences>("Preferences");

// Blazor Services
builder.Services.AddRazorPages();
builder.Services.AddControllers(options => {
	var policy = new AuthorizationPolicyBuilder().RequireAuthenticatedUser().Build();
	options.Filters.Add(new AuthorizeFilter(policy));
}).AddOData(options => {
	options.AddRouteComponents("odata", models.GetEdmModel()).EnableQueryFeatures().TimeZone = TimeZoneInfo.Utc;
});

// Swagger Services
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen(options => {

	// Get configuration variables
	var instance = builder.Configuration.GetSection("AzureAd")["Instance"];
	var tenant = builder.Configuration.GetSection("AzureAd")["TenantId"];
	var scopes = new Dictionary<string, string> {
		{ builder.Configuration.GetSection("Swagger")["ScopeUrl"]!, "Access to backend" }
	};

	// Add Security Requeriments
	options.AddSecurityRequirement(new OpenApiSecurityRequirement() {{
		new OpenApiSecurityScheme {
			Name = "oauth2",
			Scheme = "oauth2",
			In = ParameterLocation.Header,
			Reference = new OpenApiReference {
				Type = ReferenceType.SecurityScheme,
				Id = "oauth2"
			}
		},
		new List<string>()
	}});

	// Add Security Definitions
	options.AddSecurityDefinition("oauth2", new OpenApiSecurityScheme {
		Type = SecuritySchemeType.OAuth2,
		Flows = new OpenApiOAuthFlows {
			Implicit = new OpenApiOAuthFlow() {
				AuthorizationUrl = new Uri($"{instance}{tenant}/oauth2/v2.0/authorize"),
				TokenUrl = new Uri($"{instance}{tenant}/common/v2.0/token"),
				Scopes = scopes
			}
		}
	});

	// Swagger Documentation Attributes
	options.SwaggerDoc("v0", new OpenApiInfo {
		Title = "Hephaestus Backend"
	});

});

// Add Database Context
builder.Services.AddDbContext<DatabaseContext>(options =>
				options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));

// Add Routing Options
builder.Services.AddRouting(options => {
	options.LowercaseUrls = true;
	options.LowercaseQueryStrings = true;
});

// Build the Application
var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment()) {
	app.UseSwagger();
	app.UseSwaggerUI(options => {
		options.OAuthAppName("Hephaestus");
		options.OAuthClientId(builder.Configuration.GetSection("Swagger")["ClientId"]);
		options.OAuthClientSecret(builder.Configuration.GetSection("Swagger")["ClientSecret"]);
		options.OAuthUseBasicAuthenticationWithAccessCodeGrant();
		options.SwaggerEndpoint("v0/swagger.json", "Hephaestus Backend");
		options.ConfigObject.AdditionalItems.Add("tryItOutEnabled", "true");
		options.ConfigObject.AdditionalItems.Add("persistAuthorization", "true");
		options.ConfigObject.AdditionalItems.Add("displayOperationId", "false");
		options.ConfigObject.AdditionalItems.Add("displayRequestDuration", "false");
		options.ConfigObject.AdditionalItems.Add("defaultModelRendering", "example");
		options.ConfigObject.AdditionalItems.Add("defaultModelsExpandDepth", "-1");
		options.ConfigObject.AdditionalItems.Add("defaultModelExpandDepth", "1");
		options.ConfigObject.AdditionalItems.Add("docExpansion", "none");
		options.ConfigObject.AdditionalItems.Add("deepLinking", "false");
		options.ConfigObject.AdditionalItems.Add("filter", "true");
	});
}

// Default Configurations
app.UseHttpsRedirection();
app.UseBlazorFrameworkFiles();
app.UseStaticFiles();
app.UseRouting();
app.UseAuthentication();
app.UseAuthorization();
app.MapRazorPages();
app.MapControllers();
app.MapFallbackToFile("index.html");

// Run the Application
app.Run();