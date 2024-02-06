namespace Hephaestus.Architect.Models {

	public class Language : IKey {

		[Key]
		[Required]
		[MaxLength(2)]
		public string? Key { get; set; }

		[Required]
		[MaxLength(16)]
		public string? Name { get; set; }

		[MaxLength(16)]
		public string? Name_pt { get; set; }

		[MaxLength(16)]
		public string? Name_en { get; set; }

		[MaxLength(16)]
		public string? Name_es { get; set; }

	}

}