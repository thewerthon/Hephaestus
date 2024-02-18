namespace Hephaestus.Architect.Application.Models;

public abstract class BaseKey : BaseType, IKey {

	[Key]
	[Required]
	public string Key { get; set; } = string.Empty;

	public bool Active { get; set; } = true;

}