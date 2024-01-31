using System.Text.Json.Serialization;

namespace Hephaestus.Architect.Models {

	public class Preferences {

		[JsonPropertyName("theme")]
		public string? Theme { get; set; } = "auto";

		[JsonPropertyName("language")]
		public string? Language { get; set; } = "pt";

	}

}