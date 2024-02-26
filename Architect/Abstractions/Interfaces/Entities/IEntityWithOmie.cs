namespace Hephaestus.Architect.Abstractions.Interfaces;

public interface IEntityWithOmie : IEntity {

	[MaxLength(16)]
	public string? Omie { get; set; }

}