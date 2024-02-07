namespace Hephaestus.Architect.Interfaces {

	public interface IRecordTraced : IRecord {

		UserInfo? CreatedBy { get; set; }

		DateTime? CreatedOn { get; set; }

		UserInfo? UpdatedBy { get; set; }

		DateTime? UpdatedOn { get; set; }

	}

}