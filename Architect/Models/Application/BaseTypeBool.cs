namespace Hephaestus.Architect.Application.Models;

public abstract class BaseTypeBool : BaseType, ITypeBool {

	[Key]
	[Required]
	public bool Key { get; set; } = false;

}