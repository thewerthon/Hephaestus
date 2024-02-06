namespace Hephaestus.Architect.Models {

	public class UserRole : IKey {

		[Key]
		[Required]
		[MaxLength(32)]
		public string? Key { get; set; }

		[Required]
		[MaxLength(32)]
		public string? Name { get; set; }

		[MaxLength(32)]
		public string? Name_pt { get; set; }

		[MaxLength(32)]
		public string? Name_en { get; set; }

		[MaxLength(32)]
		public string? Name_es { get; set; }

	}

}