namespace Hephaestus.Architect.Models {

	public class User : IRecordTracedComplete, IRecordHidden, IRecordActive {

		[Key]
		[Required]
		public int Id { get; set; }

		[Required]
		[MinLength(36)]
		[MaxLength(36)]
		public string Guid { get; set; } = string.Empty;

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
		public virtual Hidden? HiddenData { get; set; }

		[ForeignKey("Active")]
		public bool Active { get; set; } = true;
		public virtual Active? ActiveData { get; set; }

		[ForeignKey("CreatedBy")]
		public int? CreatedBy { get; set; }
		public virtual User? CreatedByData { get; set; }
		public DateTime? CreatedAt { get; set; }

		[ForeignKey("UpdatedBy")]
		public int? UpdatedBy { get; set; }
		public virtual User? UpdatedByData { get; set; }
		public DateTime? UpdatedAt { get; set; }

		[ForeignKey("DeletedBy")]
		public int? DeletedBy { get; set; }
		public virtual User? DeletedByData { get; set; }
		public DateTime? DeletedAt { get; set; }

		// Navigation Propety
		public virtual Preferences? Preferences { get; set; }

	}

}