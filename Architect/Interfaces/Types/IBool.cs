namespace Hephaestus.Architect.Application.Interfaces;

public interface IBool : ILocalizableValue {

	[Key]
	[Required]
	public bool Key { get; set; }

}