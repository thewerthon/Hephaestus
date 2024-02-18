namespace Hephaestus.Architect.Application.Models;

public abstract class BaseEntityIntegratable : BaseEntity, IEntityIntegratable {

	[MaxLength(16)]
	public string? Oid { get; set; }

}