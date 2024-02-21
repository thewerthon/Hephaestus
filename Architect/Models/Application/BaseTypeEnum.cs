namespace Hephaestus.Architect.Application.Models;

public abstract class BaseTypeEnum : BaseType, ITypeEnum {

	[Key]
	[Required]
	public byte Key { get; set; } = 0;

	public bool Active { get; set; } = true;

}