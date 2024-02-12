﻿namespace Hephaestus.Architect.Models {

	public class Preferences : IPreferences, IRecord {

		[Key]
		[Required]
		public int Id { get; set; }

		[ForeignKey("User")]
		public int User { get; set; }
		public virtual User? UserData { get; set; }

		[ForeignKey("Theme")]
		public string? Theme { get; set; } = "auto";
		public virtual Theme? ThemeData { get; set; }

		[ForeignKey("Language")]
		public string? Language { get; set; } = "pt";
		public virtual Language? LanguageData { get; set; }

	}

}