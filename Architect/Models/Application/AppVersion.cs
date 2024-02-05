namespace Hephaestus.Architect.Models {

	public class AppVersion : IRecord {

		[Key]
		[Required]
		public int Id { get; set; }

		[Required]
		public int Build { get; set; } = 3;

		[Required]
		public int Force { get; set; } = 3;

		[Required]
		[MinLength(6)]
		[MaxLength(32)]
		public string Name { get; set; } = "v2.0.0 (Alpha 3)";

		[MaxLength()]
		public string Notes { get; set; } =
			""
		;

	}

}