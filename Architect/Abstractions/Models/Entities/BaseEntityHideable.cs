namespace Hephaestus.Architect.Abstractions.Models;

public abstract class BaseEntityHideable : BaseEntity, IEntityHideable {

	[ForeignKey("Hidden")]
	public bool Hidden { get; set; } = false;
	public virtual YesNo? HiddenData { get; set; }

}