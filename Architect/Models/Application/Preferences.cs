using Hephaestus.Architect.Interfaces;
using System.ComponentModel.DataAnnotations;

namespace Hephaestus.Architect.Models {

	public class Preferences : IRecordWithGuid {

		[Key]
		[Required]
		public int Id { get; set; }

		[Required]
		[MinLength(36)]
		[MaxLength(36)]
		public string? Guid { get; set; }

		[MaxLength(8)]
		public string? Theme { get; set; } = "auto";

		[MaxLength(8)]
		public string? Language { get; set; } = "pt";

	}

}