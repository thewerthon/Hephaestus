namespace Hephaestus.Architect.Models;

public abstract class BaseSoftDeletable : BaseEntity, IEntitySoftDeletable {

	[ForeignKey("Deleted")]
	public bool Deleted { get; set; } = false;
	public virtual YesNo? DeletedData { get; set; }

	[ForeignKey("DeletedBy")]
	public int? DeletedBy { get; set; }
	public virtual User? DeletedByData { get; set; }
	public DateTime? DeletedOn { get; set; }

}