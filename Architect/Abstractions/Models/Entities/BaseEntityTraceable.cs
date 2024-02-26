namespace Hephaestus.Architect.Abstractions.Models;

public abstract class BaseEntityTraceable : BaseEntity, IEntityTraceable {

	[ForeignKey("CreatedBy")]
	public int? CreatedBy { get; set; }
	public virtual User? CreatedByData { get; set; }
	public DateTime? CreatedOn { get; set; }

	[ForeignKey("UpdatedBy")]
	public int? UpdatedBy { get; set; }
	public virtual User? UpdatedByData { get; set; }
	public DateTime? UpdatedOn { get; set; }

}