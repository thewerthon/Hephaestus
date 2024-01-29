using Microsoft.Identity.Web;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.EntityFrameworkCore;
using Backend.Application.Database;

// WebApplication Builder
var builder = WebApplication.CreateBuilder(args);

// Identity Service
builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
				.AddMicrosoftIdentityWebApi(builder.Configuration.GetSection("AzureAd"));

// Identity Configuration
builder.Services.Configure<JwtBearerOptions>(
				JwtBearerDefaults.AuthenticationScheme, options => {
					options.TokenValidationParameters.NameClaimType = "name";
				});

// Blazor Services
builder.Services.AddControllersWithViews();
builder.Services.AddRazorPages();

// Add DbContext
builder.Services.AddDbContext<DatabaseContext>(options =>
				options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));

// Build the Application
var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment()) { }

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