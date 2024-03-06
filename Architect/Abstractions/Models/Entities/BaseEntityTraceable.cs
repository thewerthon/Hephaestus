namespace Hephaestus.Architect.Abstractions.Models;

public abstract class BaseEntityTraceable : BaseEntity, IEntityTraceable {

	[ForeignKey("CreatedBy")]
	public int? CreatedBy { get; set; }
	public virtual User? CreatedByData { get; set; }
	public DateTimeOffset? CreatedOn { get; set; }

	[NotMapped]
	[JsonIgnore]
	public DateTimeOffset? LocalCreatedOn { get { return CreatedOn?.ToLocalTime(); } }

	[ForeignKey("UpdatedBy")]
	public int? UpdatedBy { get; set; }
	public virtual User? UpdatedByData { get; set; }
	public DateTimeOffset? UpdatedOn { get; set; }

	[NotMapped]
	[JsonIgnore]
	public DateTimeOffset? LocalUpdatedOn { get { return CreatedOn?.ToLocalTime(); } }

}