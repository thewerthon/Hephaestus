namespace Hephaestus.Architect.Application.Interfaces;

public interface IEntityActivable : IEntity {

	[ForeignKey("Active")]
	public bool Active { get; set; }
	public Active? ActiveData { get; set; }

}