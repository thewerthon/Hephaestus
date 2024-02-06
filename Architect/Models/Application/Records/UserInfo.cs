namespace Hephaestus.Architect.Models {

	public class UserInfo : IRecordWithGuid, IRecordActive, IRecordHidden {

		[Key]
		[Required]
		public int Id { get; set; }

		[Required]
		[MinLength(36)]
		[MaxLength(36)]
		public string? Guid { get; set; }

		[Required]
		[MinLength(3)]
		[MaxLength(64)]
		public string? Name { get; set; }

		[MinLength(3)]
		[MaxLength(32)]
		public string? FirstName { get; set; }

		[MinLength(3)]
		[MaxLength(32)]
		public string? SecondName { get; set; }

		[MinLength(3)]
		[MaxLength(32)]
		public string? Office { get; set; }

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
		public UserRole? RoleData { get; set; }

		[ForeignKey("Hidden")]
		public bool? Hidden { get; set; } = false;
		public Hidden? HiddenData { get; set; }

		[ForeignKey("Active")]
		public bool? Active { get; set; } = true;
		public Active? ActiveData { get; set; }

		// Navigation Propertiy
		public Preferences? Preferences { get; set; }

	}

}