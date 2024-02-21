namespace Hephaestus.Architect.Application.Interfaces;

public interface ITypeBool : IType {

	[Key]
	[Required]
	public bool Key { get; set; }

}