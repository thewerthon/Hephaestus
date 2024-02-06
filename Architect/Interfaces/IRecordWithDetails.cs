namespace Hephaestus.Architect.Interfaces {

	public interface IRecordWithDetails : IRecord {

		[MaxLength(128)]
		string? Details { get; set; }

		[MaxLength(128)]
		string? Details_pt { get; set; }

		[MaxLength(128)]
		string? Details_en { get; set; }

		[MaxLength(128)]
		string? Details_es { get; set; }

	}

}