namespace Hephaestus.Architect.Interfaces {

	public interface IRecordTracedActive : IRecordTraced, IRecordActive {

		UserInfo? DeletedBy { get; set; }

		DateTime? DeletedOn { get; set; }

	}

}