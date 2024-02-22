namespace Hephaestus.Architect.Application.Models;

public abstract class BaseKey : IKey {

	[Key]
	[Required]
	[MaxLength(8)]
	public string Key { get; set; } = string.Empty;

	[Required]
	[MaxLength(64)]
	public string Value { get; set; } = string.Empty;

	[MaxLength(64)]
	public string? Value_en { get; set; }

	[MaxLength(64)]
	public string? Value_es { get; set; }

	public bool Active { get; set; } = true;

}