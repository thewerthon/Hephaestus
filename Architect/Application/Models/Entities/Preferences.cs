namespace Hephaestus.Architect.Application.Models;

public class Preferences : BaseEntity {

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

	public int? FeatureAlert { get; set; } = 0;

	[MaxLength(64)]
	public string? FavoriteModules { get; set; }
	public static readonly int FavoriteModulesMaxLength = 25;

	[MaxLength(128)]
	public string? FavoriteFunctions { get; set; }
	public static readonly int FavoriteFunctionsMaxLength = 75;

}