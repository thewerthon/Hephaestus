using Microsoft.AspNetCore.Mvc;
using Hephaestus.Architect.Models;

namespace Hephaestus.Backend.Controllers {

	[ApiController]
	[Route("api/weatherforecasts")]
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