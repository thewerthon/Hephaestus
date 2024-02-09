namespace Hephaestus.Architect.Models {

	public class Active : IBool {

		[Key]
		[Required]
		public bool Id { get; set; }

		[Required]
		[MaxLength(8)]
		public string Name { get; set; } = string.Empty;

		[MaxLength(8)]
		public string? Name_pt { get; set; }

		[MaxLength(8)]
		public string? Name_en { get; set; }

		[MaxLength(8)]
		public string? Name_es { get; set; }

	}

}