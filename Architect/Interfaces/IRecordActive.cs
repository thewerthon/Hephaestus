namespace Hephaestus.Architect.Interfaces {

	public interface IRecordActive : IRecord {

		[ForeignKey("Active")]
		bool? Active { get; set; }
		Active? ActiveData { get; set; }

	}

}