namespace Hephaestus.Architect.Interfaces {

	public interface IRecordIntegration : IRecord {

		[MaxLength(16)]
		string? Oid { get; set; }

	}

}