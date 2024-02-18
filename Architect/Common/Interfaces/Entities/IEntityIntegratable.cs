namespace Hephaestus.Architect.Application.Interfaces;

public interface IEntityIntegratable : IEntity {

	[MaxLength(16)]
	public string? Oid { get; set; }

}