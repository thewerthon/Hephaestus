using Hephaestus.Architect.Interfaces;
using System.ComponentModel.DataAnnotations;

namespace Hephaestus.Architect.Models {

	public class Version : IRecord {

		[Key]
		[Required]
		public int Id { get; set; }

		[Required]
		public int Build { get; set; } = 2;

		[Required]
		public int Force { get; set; } = 2;

		[Required]
		[MinLength(6)]
		[MaxLength(32)]
		public string Name { get; set; } = "v2.0.0 (Alpha 2)";

		[MaxLength()]
		public string Notes { get; set; } =
			""
		;

	}

}