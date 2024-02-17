namespace Hephaestus.Architect.Interfaces {

	public interface IRecordTracedComplete : IRecordTracedBasic, IRecordActive {

		int? DeletedBy { get; set; }
		User? DeletedByData { get; set; }
		DateTime? DeletedAt { get; set; }

	}

}