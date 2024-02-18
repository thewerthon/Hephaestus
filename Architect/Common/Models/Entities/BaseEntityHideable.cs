namespace Hephaestus.Architect.Application.Models;

public abstract class BaseEntityHideable : BaseEntity, IEntityHideable {

	[ForeignKey("Hidden")]
	public bool Hidden { get; set; } = false;
	public Hidden? HiddenData { get; set; }

}