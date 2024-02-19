namespace Hephaestus.Architect.Application.Models;

public class Log : BaseEntity {

	[Required]
	[MaxLength(64)]
	public string Action { get; set; } = string.Empty;

	[MaxLength(64)]
	public string? ComputerName { get; set; } = string.Empty;

	[MaxLength(64)]
	public string? IPAddress { get; set; } = string.Empty;

	[Required]
	[ForeignKey("Version")]
	public Version Version { get; set; } = 0;
	public virtual Version? VersionData { get; set; }

	[ForeignKey("PerformedBy")]
	public int? PerformedBy { get; set; }
	public virtual User? PerformedByData { get; set; }
	public DateTime? PerformedOn { get; set; }

}