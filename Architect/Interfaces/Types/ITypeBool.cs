namespace Hephaestus.Architect.Interfaces;

public interface ITypeBool : ILocalizableValue {

	[Key]
	[Required]
	public bool Key { get; set; }

}