namespace Hephaestus.Architect.Application.Models;

public abstract class BaseBool : IBool {

	[Key]
	[Required]
	public bool Key { get; set; } = false;

	[Required]
	[MaxLength(64)]
	public string Value { get; set; } = string.Empty;

	[MaxLength(64)]
	public string? Value_en { get; set; }

	[MaxLength(64)]
	public string? Value_es { get; set; }

}