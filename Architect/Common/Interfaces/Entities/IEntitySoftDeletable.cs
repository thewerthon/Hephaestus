namespace Hephaestus.Architect.Application.Interfaces;

public interface IEntitySoftDeletable : IEntity {

	[ForeignKey("Deleted")]
	public bool Deleted { get; set; }
	public Deleted? DeletedData { get; set; }

	[ForeignKey("DeletedBy")]
	public int? DeletedBy { get; set; }
	public User? DeletedByData { get; set; }
	public DateTime? DeletedOn { get; set; }

}