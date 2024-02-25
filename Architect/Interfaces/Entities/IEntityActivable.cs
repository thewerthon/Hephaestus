namespace Hephaestus.Architect.Interfaces;

public interface IEntityActivable : IEntity {

	[ForeignKey("Active")]
	public bool Active { get; set; }
	public YesNo? ActiveData { get; set; }

}