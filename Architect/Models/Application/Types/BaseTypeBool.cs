namespace Hephaestus.Architect.Models;

public abstract class BaseTypeBool : ITypeBool {

	[Key]
	[Required]
	public bool Key { get; set; } = false;

	[Required]
	[MaxLength(64)]
	public string Value { get; set; } = default!;

	[MaxLength(64)]
	public string? Value_en { get; set; }

	[MaxLength(64)]
	public string? Value_es { get; set; }

}