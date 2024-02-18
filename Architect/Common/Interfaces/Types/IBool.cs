namespace Hephaestus.Architect.Application.Interfaces;

public interface IBool : IType {

	[Key]
	[Required]
	public bool Key { get; set; }

}