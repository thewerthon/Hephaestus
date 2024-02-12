﻿namespace Hephaestus.Architect.Models {

	public class Theme : IKey {

		[Key]
		[Required]
		[MaxLength(5)]
		public string Key { get; set; } = string.Empty;

		[Required]
		[MaxLength(16)]
		public string Name { get; set; } = string.Empty;

		[MaxLength(16)]
		public string? Name_pt { get; set; }

		[MaxLength(16)]
		public string? Name_en { get; set; }

		[MaxLength(16)]
		public string? Name_es { get; set; }

	}

}