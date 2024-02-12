namespace Hephaestus.Architect.Interfaces {

	public interface IRecordWithIntegration : IRecord {

		[MaxLength(16)]
		string? Oid { get; set; }

	}

}