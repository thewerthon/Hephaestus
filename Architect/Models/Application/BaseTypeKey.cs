namespace Hephaestus.Architect.Application.Models;

public abstract class BaseTypeKey : BaseType, ITypeKey {

	[Key]
	[Required]
	[MaxLength(8)]
	public string Key { get; set; } = string.Empty;

	public bool Active { get; set; } = true;

}