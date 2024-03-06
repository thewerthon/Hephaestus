namespace Hephaestus.Architect.Abstractions.Interfaces;

public interface IEntityTraceable : IEntity {

	[ForeignKey("CreatedBy")]
	public int? CreatedBy { get; set; }
	public User? CreatedByData { get; set; }
	public DateTimeOffset? CreatedOn { get; set; }

	[ForeignKey("UpdatedBy")]
	public int? UpdatedBy { get; set; }
	public User? UpdatedByData { get; set; }
	public DateTimeOffset? UpdatedOn { get; set; }

}