namespace Hephaestus.Architect.Models {

	public class Preferences : IRecord {

		[Key]
		[Required]
		public int Id { get; set; }

		[ForeignKey("User")]
		public int User { get; set; }
		public UserInfo? UserData { get; set; }

		[ForeignKey("Theme")]
		public string? Theme { get; set; } = "auto";
		public Theme? ThemeData { get; set; }

		[ForeignKey("Language")]
		public string? Language { get; set; } = "pt";
		public Language? LanguageData { get; set; }

	}

}