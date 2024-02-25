namespace Hephaestus.Architect.Interfaces;

public interface IEntityHideable : IEntity {

	[ForeignKey("Hidden")]
	public bool Hidden { get; set; }
	public YesNo? HiddenData { get; set; }

}