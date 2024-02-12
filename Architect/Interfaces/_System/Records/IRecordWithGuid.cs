namespace Hephaestus.Architect.Interfaces {

	public interface IRecordWithGuid : IRecord {

		[Required]
		Guid Guid { get; set; }

	}

}