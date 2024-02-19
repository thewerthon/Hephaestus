namespace Hephaestus.Architect.Application.Models;

public abstract class BaseKey : BaseType {

	[Key]
	[Required]
	[MaxLength(8)]
	public string Key { get; set; } = string.Empty;

	public bool Active { get; set; } = true;

}