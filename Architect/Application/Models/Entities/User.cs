namespace Hephaestus.Architect.Application.Models;

public class User : BaseEntityTraceable, ILocalizableName, IEntityActivable, IEntityHideable {

	[Required]
	[MinLength(36)]
	[MaxLength(36)]
	public string Guid { get; set; } = default!;

	[Required]
	[MinLength(3)]
	[MaxLength(64)]
	public string Name { get; set; } = default!;

	[MinLength(3)]
	[MaxLength(64)]
	public string? Name_en { get; set; }

	[MinLength(3)]
	[MaxLength(64)]
	public string? Name_es { get; set; }

	[MinLength(3)]
	[MaxLength(32)]
	public string? FirstName { get; set; }

	[MinLength(3)]
	[MaxLength(32)]
	public string? LastName { get; set; }

	[MinLength(3)]
	[MaxLength(32)]
	public string? Country { get; set; }

	[MinLength(3)]
	[MaxLength(32)]
	public string? Office { get; set; }

	[MinLength(3)]
	[MaxLength(32)]
	public string? Department { get; set; }

	[MinLength(3)]
	[MaxLength(64)]
	public string? Title { get; set; }

	[Required]
	[EmailAddress]
	[MinLength(12)]
	[MaxLength(64)]
	public string? Email { get; set; }

	[MaxLength()]
	public string? Photo { get; set; }

	[ForeignKey("Role")]
	public string? Role { get; set; }
	public virtual Role? RoleData { get; set; }

	[ForeignKey("Hidden")]
	public bool Hidden { get; set; } = false;
	public virtual YesNo? HiddenData { get; set; }

	[ForeignKey("Active")]
	public bool Active { get; set; } = true;
	public virtual YesNo? ActiveData { get; set; }

	// Navigation Propety
	public virtual Preferences? Preferences { get; set; }

}