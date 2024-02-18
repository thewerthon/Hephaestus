namespace Hephaestus.Architect.Application.Interfaces;

public interface IEnum : IType {

	[Key]
	[Required]
	public byte Key { get; set; }

	public bool Active { get; set; }

}