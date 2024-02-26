namespace Hephaestus.Architect.Abstractions.Interfaces;

public interface IEntityWithOrder : IEntity {

	public int? Order { get; set; }

}