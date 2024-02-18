namespace Hephaestus.Architect.Application.Interfaces;

public interface ILocalizableName {

	[Required]
	[MaxLength(64)]
	public string Name { get; set; }

	[MaxLength(64)]
	public string? Name_en { get; set; }

	[MaxLength(64)]
	public string? Name_es { get; set; }

	public string GetLocalizedName(string locale) {

		return locale.ToLower() switch {
			"en" => Name_en ?? Name,
			"es" => Name_es ?? Name,
			_ => Name,
		};

	}

}