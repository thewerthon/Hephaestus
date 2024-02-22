namespace Hephaestus.Architect.Application.Interfaces;

public interface ILocalizableDetails {

	[MaxLength(128)]
	public string? Details { get; set; }

	[MaxLength(128)]
	public string? Details_en { get; set; }

	[MaxLength(128)]
	public string? Details_es { get; set; }

	public string? GetLocalizedDetails(string locale) {

		return locale.ToLower() switch {
			"en" => Details_en ?? Details,
			"es" => Details_es ?? Details,
			_ => Details,
		};

	}

}