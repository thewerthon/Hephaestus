namespace Hephaestus.Architect.Application.Interfaces;

public interface IEnum<T> : IType {

	[Key]
	[Required]
	public byte Key { get; set; }

	public bool Active { get; set; }

}