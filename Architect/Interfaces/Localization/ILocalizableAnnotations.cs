namespace Hephaestus.Architect.Interfaces;

public interface ILocalizableAnnotations {

	[MaxLength()]
	public string? Annotations { get; set; }

	[MaxLength()]
	public string? Annotations_en { get; set; }

	[MaxLength()]
	public string? Annotations_es { get; set; }

	public string? GetLocalizedAnnotations(string locale) {

		return locale.ToLower() switch {
			"en" => Annotations_en ?? Annotations,
			"es" => Annotations_es ?? Annotations,
			_ => Annotations,
		};

	}

}