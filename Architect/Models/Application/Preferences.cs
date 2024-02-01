using System.Text.Json.Serialization;
using System.ComponentModel.DataAnnotations;

namespace Hephaestus.Architect.Models {

	public class Preferences {

		[Key]
		[Required]
		[JsonPropertyName("id")]
		public int Id { get; set; }

		[Required]
		[MinLength(36)]
		[MaxLength(36)]
		[JsonPropertyName("guid")]
		public string? Guid { get; set; }

		[MaxLength(8)]
		[JsonPropertyName("theme")]
		public string? Theme { get; set; } = "auto";

		[MaxLength(8)]
		[JsonPropertyName("language")]
		public string? Language { get; set; } = "pt";

	}

}