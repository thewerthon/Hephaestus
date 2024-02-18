namespace Hephaestus.Architect.Application.Interfaces;

public interface IEntityWithGuid : IEntity {

	[Required]
	public Guid Guid { get; set; }

}