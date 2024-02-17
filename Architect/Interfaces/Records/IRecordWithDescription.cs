namespace Hephaestus.Architect.Interfaces {

	public interface IRecordWithDescription : IRecord {

		[MaxLength(255)]
		string? Description { get; set; }

		[MaxLength(255)]
		string? Description_en { get; set; }

		[MaxLength(255)]
		string? Description_es { get; set; }

	}

}