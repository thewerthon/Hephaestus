namespace Hephaestus.Architect.Application.Interfaces;

public interface IEntityWithOrder : IEntity {

	public int? Order { get; set; }

}