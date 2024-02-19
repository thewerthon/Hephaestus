namespace Hephaestus.Architect.Application.Models;

public abstract class BaseEnum : BaseType {

	[Key]
	[Required]
	public byte Key { get; set; } = 0;

	public bool Active { get; set; } = true;

}