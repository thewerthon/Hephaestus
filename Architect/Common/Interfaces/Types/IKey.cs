namespace Hephaestus.Architect.Application.Interfaces;

public interface IKey<T> : IType {

	[Key]
	[Required]
	[MaxLength(8)]
	public string Key { get; set; }

	public bool Active { get; set; }

}