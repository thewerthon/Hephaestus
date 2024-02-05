namespace Hephaestus.Architect.Interfaces {

	public interface IRecordWithDescription : IRecord {

		[MaxLength()]
		string? Description { get; set; }

		[MaxLength()]
		string? Description_pt { get; set; }

		[MaxLength()]
		string? Description_en { get; set; }

		[MaxLength()]
		string? Description_es { get; set; }

	}

}