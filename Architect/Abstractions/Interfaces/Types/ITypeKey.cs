namespace Hephaestus.Architect.Abstractions.Interfaces;

public interface ITypeKey : ILocalizableValue {

	[Key]
	[Required]
	[MaxLength(8)]
	public string Key { get; set; }

	public bool Active { get; set; }

}