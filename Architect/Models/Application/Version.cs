using System.Text.Json.Serialization;
using System.ComponentModel.DataAnnotations;

namespace Hephaestus.Architect.Models {

	public class Version {

		[Key]
		[Required]
		[JsonPropertyName("id")]
		public int Id { get; set; }

		[Required]
		[JsonPropertyName("build")]
		public int Build { get; set; } = 2;

		[Required]
		[JsonPropertyName("force")]
		public int Force { get; set; } = 2;

		[Required]
		[MinLength(6)]
		[MaxLength(32)]
		[JsonPropertyName("name")]
		public string Name { get; set; } = "v2.0.0 (Alpha 2)";

		[JsonPropertyName("notes")]
		public string Notes { get; set; } =
			""
		;

	}

}