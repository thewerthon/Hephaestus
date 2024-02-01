namespace Hephaestus.Architect.Interfaces {

	public interface IRecordWithOrder : IRecord {

		int? Order { get; set; }

	}

}