namespace Hephaestus.Architect.Abstractions.Interfaces;

public interface ITypeEnum : ILocalizableValue {

	[Key]
	[Required]
	public byte Key { get; set; }

	public bool Active { get; set; }

}