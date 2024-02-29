namespace Hephaestus.Architect.Abstractions.Interfaces;

public interface ILocalizableDescription {

	[MaxLength(256)]
	public string? Description { get; set; }

	[MaxLength(256)]
	public string? Description_en { get; set; }

	[MaxLength(256)]
	public string? Description_es { get; set; }

	public string? GetLocalizedDescription(string locale) {

		return locale.ToLower() switch {
			"en" => Description_en ?? Description,
			"es" => Description_es ?? Description,
			_ => Description,
		};

	}

}