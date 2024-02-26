namespace Hephaestus.Architect.Abstractions.Interfaces;

public interface ITypeBool : ILocalizableValue {

	[Key]
	[Required]
	public bool Key { get; set; }

}