namespace Hephaestus.Architect.Interfaces {

	public interface IRecordWithCode : IRecord {

		[MaxLength(16)]
		string? Code { get; set; }

	}

}