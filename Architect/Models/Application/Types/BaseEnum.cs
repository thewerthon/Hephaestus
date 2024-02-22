namespace Hephaestus.Architect.Application.Models;

public abstract class BaseEnum : IEnum {

	[Key]
	[Required]
	public byte Key { get; set; } = 0;

	[Required]
	[MaxLength(64)]
	public string Value { get; set; } = string.Empty;

	[MaxLength(64)]
	public string? Value_en { get; set; }

	[MaxLength(64)]
	public string? Value_es { get; set; }

	public bool Active { get; set; } = true;

}