namespace Hephaestus.Architect.Interfaces {

	public interface IRecordHidden : IRecord {

		[ForeignKey("Hidden")]
		bool? Hidden { get; set; }
		Hidden? HiddenData { get; set; }

	}

}