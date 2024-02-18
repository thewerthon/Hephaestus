namespace Hephaestus.Architect.Application.Models;

public class Preferences : BaseEntity {

	[Key]
	[Required]
	public new int Id { get; set; } = 0;

	[Required]
	[ForeignKey("User")]
	public int? User { get; set; }
	public virtual User? UserData { get; set; }

	[ForeignKey("Theme")]
	public string? Theme { get; set; } = "auto";
	public virtual Theme? ThemeData { get; set; }

	[ForeignKey("Language")]
	public string? Language { get; set; } = "pt";
	public virtual Language? LanguageData { get; set; }

}