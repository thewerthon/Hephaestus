namespace Hephaestus.Architect.Abstractions.Interfaces;

public interface ILocalizableValue {

	[Required]
	[MaxLength(64)]
	public string Value { get; set; }

	[MaxLength(64)]
	public string? Value_en { get; set; }

	[MaxLength(64)]
	public string? Value_es { get; set; }

	public string GetLocalizedValue(string locale) {

		return locale.ToLower() switch {
			"en" => Value_en ?? Value,
			"es" => Value_es ?? Value,
			_ => Value,
		};

	}

}