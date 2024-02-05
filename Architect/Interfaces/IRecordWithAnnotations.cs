namespace Hephaestus.Architect.Interfaces {

	public interface IRecordWithAnnotations : IRecord {

		[MaxLength()]
		string? Annotations { get; set; }

		[MaxLength()]
		string? Annotations_pt { get; set; }

		[MaxLength()]
		string? Annotations_en { get; set; }

		[MaxLength()]
		string? Annotations_es { get; set; }

	}

}