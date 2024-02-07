namespace Hephaestus.Architect.Interfaces {

	public interface IRecordWithName : IRecord {

		[MaxLength(64)]
		string? Name { get; set; }

		[MaxLength(64)]
		string? Name_pt { get; set; }

		[MaxLength(64)]
		string? Name_en { get; set; }

		[MaxLength(64)]
		string? Name_es { get; set; }

	}

}