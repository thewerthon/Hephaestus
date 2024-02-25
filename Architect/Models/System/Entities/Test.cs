namespace Hephaestus.Architect.Models;

public class Test : BaseEntityTraceable, IEntityTraceable, IEntitySoftDeletable, ILocalizableName {

	[Required]
	[MaxLength(64)]
	public string Name { get; set; } = default!;

	[MaxLength(64)]
	public string? Name_en { get; set; }

	[MaxLength(64)]
	public string? Name_es { get; set; }

	[ForeignKey("Deleted")]
	public bool Deleted { get; set; } = true;
	public virtual YesNo? DeletedData { get; set; }

	[ForeignKey("DeletedBy")]
	public int? DeletedBy { get; set; }
	public virtual User? DeletedByData { get; set; }
	public DateTime? DeletedOn { get; set; }

}