namespace Hephaestus.Architect.Interfaces;

public interface IEntityWithGuid : IEntity {

	[Required]
	public Guid Guid { get; set; }

}