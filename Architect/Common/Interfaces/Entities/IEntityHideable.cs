namespace Hephaestus.Architect.Application.Interfaces;

public interface IEntityHideable : IEntity {

	[ForeignKey("Hidden")]
	public bool Hidden { get; set; }
	public Hidden? HiddenData { get; set; }

}