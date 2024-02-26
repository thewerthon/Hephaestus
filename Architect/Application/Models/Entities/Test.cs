namespace Hephaestus.Architect.Application.Models;

public class Test : BaseEntityTraceable, ILocalizableName {

	[Required]
	[MaxLength(64)]
	public string Name { get; set; } = default!;

	[MaxLength(64)]
	public string? Name_en { get; set; }

	[MaxLength(64)]
	public string? Name_es { get; set; }

}