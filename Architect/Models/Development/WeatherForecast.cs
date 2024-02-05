<<<<<<<< HEAD:Architect/Models/Development/WeatherForecast.cs
namespace Hephaestus.Architect.Models {
========
namespace Architect.SideModules.Development.Models {
>>>>>>>> main:Architect/SideModules/Development/Models/WeatherForecast.cs

	public class WeatherForecast {

		public DateOnly Date { get; set; }
		public int TemperatureC { get; set; }
		public int TemperatureF => 32 + (int)(TemperatureC / 0.5556);
		public string? Summary { get; set; }

	}

}