namespace Hephaestus.Architect.Abstractions.Interfaces;

public interface IEntityWithGuid : IEntity {

	[Required]
	public Guid Guid { get; set; }

}