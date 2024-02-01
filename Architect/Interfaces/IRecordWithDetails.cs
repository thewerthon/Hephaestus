using System.ComponentModel.DataAnnotations;

namespace Hephaestus.Architect.Interfaces {

	public interface IRecordWithDetails : IRecord {

		[MaxLength(255)]
		string? Details { get; set; }

		[MaxLength(255)]
		string? Details_pt { get; set; }

		[MaxLength(255)]
		string? Details_en { get; set; }

		[MaxLength(255)]
		string? Details_es { get; set; }

	}

}