namespace Hephaestus.Architect.Application.Models;

public abstract class BaseEntitySoftDeletable : BaseEntity, IEntitySoftDeletable {

	[ForeignKey("Deleted")]
	public bool Deleted { get; set; } = false;
	public Deleted? DeletedData { get; set; }

	[ForeignKey("DeletedBy")]
	public int? DeletedBy { get; set; }
	public User? DeletedByData { get; set; }
	public DateTime? DeletedOn { get; set; }

}