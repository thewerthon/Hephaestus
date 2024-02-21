namespace Hephaestus.Architect.System.Models;

public class Version {

	[Key]
	[Required]
	public int Build { get; set; } = 4;

	[Required]
	public int Force { get; set; } = 4;

	[Required]
	[MinLength(6)]
	[MaxLength(32)]
	public string Name { get; set; } = "v2.0.0 (Alpha 4)";

	[MaxLength()]
	public string? Notes { get; set; } =
		""
	;

}