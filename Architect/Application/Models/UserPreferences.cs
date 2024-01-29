using System.Text.Json.Serialization;

namespace Architect.Application.Models {

	public class UserPreferences {

		[JsonPropertyName("theme")]
		public string? Theme { get; set; } = "auto";

		[JsonPropertyName("language")]
		public string? Language { get; set; } = "pt";

	}

}