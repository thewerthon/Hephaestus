namespace Hephaestus.Architect.Application.Models;

public abstract class BaseEntityTraceable : BaseEntity, IEntityTraceable {

	[ForeignKey("CreatedBy")]
	public int? CreatedBy { get; set; }
	public User? CreatedByData { get; set; }
	public DateTime? CreatedOn { get; set; }

	[ForeignKey("UpdatedBy")]
	public int? UpdatedBy { get; set; }
	public User? UpdatedByData { get; set; }
	public DateTime? UpdatedOn { get; set; }

}