namespace Hephaestus.Frontend.Application.Services;

public class VariablesService {

	public static string SaudationCode() {

		var time = DateTime.Now.TimeOfDay;
		var afternoon = new TimeSpan(12, 0, 0);
		var evening = new TimeSpan(18, 0, 0);
		var night = new TimeSpan(20, 0, 0);

		return
			time < afternoon ? "0050" :
			time < evening ? "0051" :
			time < night ? "0052"
			: "0053";

	}

}