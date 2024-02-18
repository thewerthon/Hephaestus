namespace Hephaestus.Architect.Application.Models;

public abstract class BaseEntityActivable : BaseEntity, IEntityActivable {

	[ForeignKey("Active")]
	public bool Active { get; set; } = true;
	public Active? ActiveData { get; set; }

}