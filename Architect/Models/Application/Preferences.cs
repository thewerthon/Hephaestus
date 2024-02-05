namespace Hephaestus.Architect.Models {

	public class Preferences : IRecord {

		[Key]
		[Required]
		public int Id { get; set; }

		[ForeignKey("UserId")]
		public int UserId { get; set; }
		public UserInfo? User { get; set; }

		[MaxLength(8)]
		public string? Theme { get; set; } = "auto";

		[MaxLength(8)]
		public string? Language { get; set; } = "pt";

	}

}