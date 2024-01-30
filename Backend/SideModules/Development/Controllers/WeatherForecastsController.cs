using Microsoft.AspNetCore.Mvc;
using Microsoft.Identity.Web.Resource;
using Microsoft.AspNetCore.Authorization;
using Architect.SideModules.Development.Models;

namespace Backend.SideModules.Development.Controllers {

	[ApiController]
	[Route("api/[controller]/[action]")]
	[RequiredScope(RequiredScopesConfigurationKey = "AzureAd:Scopes")]
	public class WeatherForecastsController : ControllerBase {

		private static readonly string[] Summaries = ["Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"];

		[HttpGet(Name = "GetWeatherForecasts")]
		public IEnumerable<WeatherForecast> Get() {

			return Enumerable.Range(1, 50).Select(index => new WeatherForecast {
				Date = DateOnly.FromDateTime(DateTime.Now.AddDays(index)),
				TemperatureC = Random.Shared.Next(-20, 55),
				Summary = Summaries[Random.Shared.Next(Summaries.Length)]

			}).ToArray();

		}

	}

}