namespace Hephaestus.Architect.Models;

public class UsageLog : BaseEntity {

	[Required]
	public DateTime DateTime { get; set; }

	[Required]
	[MaxLength(32)]
	public string Action { get; set; } = default!;

	[MaxLength(255)]
	public string? Details { get; set; }

	public int? AppBuild { get; set; }

	[MaxLength(32)]
	public string? AppVersion { get; set; }

	[MaxLength(32)]
	public string? PlatformName { get; set; }

	[MaxLength(32)]
	public string? PlatformLayout { get; set; }

	[MaxLength(16)]
	public string? PlatformVersion { get; set; }

	[MaxLength(32)]
	public string? PlatformProduct { get; set; }

	[MaxLength(8)]
	public string? PlatformLanguage { get; set; }

	[MaxLength(32)]
	public string? PlatformManufacturer { get; set; }

	[MaxLength(32)]
	public string? SystemFamily { get; set; }

	[MaxLength(16)]
	public string? SystemVersion { get; set; }

	public int? SystemArchitecture { get; set; }

	[ForeignKey("User")]
	public int? User { get; set; }
	public virtual User? UserData { get; set; }

	[MaxLength(8)]
	public string? UserTheme { get; set; }

	[MaxLength(8)]
	public string? UserLanguage { get; set; }

}