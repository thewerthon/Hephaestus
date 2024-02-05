namespace Hephaestus.Architect.Interfaces {

	public interface IRecordWithIntegration : IRecord {

		[MaxLength(16)]
		string? Id2 { get; set; }

	}

}