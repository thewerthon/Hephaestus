namespace Hephaestus.Architect.Models;

public abstract class BaseTypeKey : ITypeKey {

	[Key]
	[Required]
	[MaxLength(8)]
	public string Key { get; set; } = default!;

	[Required]
	[MaxLength(64)]
	public string Value { get; set; } = default!;

	[MaxLength(64)]
	public string? Value_en { get; set; }

	[MaxLength(64)]
	public string? Value_es { get; set; }

	public bool Active { get; set; } = true;

}