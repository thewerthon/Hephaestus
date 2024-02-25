namespace Hephaestus.Architect.Interfaces;

public interface IEntityWithOrder : IEntity {

	public int? Order { get; set; }

}