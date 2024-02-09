namespace Hephaestus.Architect.Interfaces {

	public interface IRecordTraced : IRecord {

		int? CreatedBy { get; set; }
		User? CreatedByData { get; set; }
		DateTime? CreatedAt { get; set; }

		int? UpdatedBy { get; set; }
		User? UpdatedByData { get; set; }
		DateTime? UpdatedAt { get; set; }

	}

}