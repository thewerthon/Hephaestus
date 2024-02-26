namespace Hephaestus.Architect.Abstractions.Models;

public abstract class BaseEntityActivable : BaseEntity, IEntityActivable {

	[ForeignKey("Active")]
	public bool Active { get; set; } = true;
	public virtual YesNo? ActiveData { get; set; }

}