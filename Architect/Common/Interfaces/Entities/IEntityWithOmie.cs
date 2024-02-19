namespace Hephaestus.Architect.Application.Interfaces;

public interface IEntityWithOmie : IEntity {

	[MaxLength(16)]
	public string? Omie { get; set; }

}