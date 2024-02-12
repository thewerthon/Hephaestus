namespace Hephaestus.Architect.Interfaces {

	public interface IRecordTracedActive : IRecordTraced, IRecordActive {

		int? DeletedBy { get; set; }
		User? DeletedByData { get; set; }
		DateTime? DeletedAt { get; set; }

	}

}