namespace Hephaestus.Architect.Application.Models;

public abstract class BaseBool : BaseType {

	[Key]
	[Required]
	public bool Key { get; set; } = false;

}