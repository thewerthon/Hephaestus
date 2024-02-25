namespace Hephaestus.Architect.Interfaces;

public interface IEntitySoftDeletable : IEntity {

	[ForeignKey("Deleted")]
	public bool Deleted { get; set; }
	public YesNo? DeletedData { get; set; }

	[ForeignKey("DeletedBy")]
	public int? DeletedBy { get; set; }
	public User? DeletedByData { get; set; }
	public DateTime? DeletedOn { get; set; }

}