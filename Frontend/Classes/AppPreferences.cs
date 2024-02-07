using Hephaestus.Architect.Interfaces;

namespace Hephaestus.Frontend.Classes {

	public class AppPreferences : IPreferences {

		public int Id { get; set; } = 0;
		public string? Theme { get; set; } = "auto";
		public string? Language { get; set; } = "pt";

		public static implicit operator AppPreferences(Preferences preferences) {

			return new AppPreferences {

				Id = preferences.Id,
				Theme = preferences.Theme,
				Language = preferences.Language

			};

		}

	}

	public static class PreferencesExtensions {

		public static AppPreferences ToAppPreferenves(this AppPreferences preferences) {

			return new AppPreferences {

				Id = preferences.Id,
				Theme = preferences.Theme,
				Language = preferences.Language

			};

		}

	}

}