namespace Hephaestus.Architect.Application.Models;

public abstract class BaseEntityTraceable : BaseEntity, IEntityTraceable {

	[ForeignKey("Active")]
	public bool Active { get; set; }
	public YesNo? ActiveData { get; set; }

	[ForeignKey("CreatedBy")]
	public int? CreatedBy { get; set; }
	public User? CreatedByData { get; set; }
	public DateTime? CreatedOn { get; set; }

	[ForeignKey("UpdatedBy")]
	public int? UpdatedBy { get; set; }
	public User? UpdatedByData { get; set; }
	public DateTime? UpdatedOn { get; set; }

	[ForeignKey("DeletedBy")]
	public int? DeletedBy { get; set; }
	public User? DeletedByData { get; set; }
	public DateTime? DeletedOn { get; set; }

}