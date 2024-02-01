using System.ComponentModel.DataAnnotations;

namespace Hephaestus.Architect.Interfaces {

	public interface IRecordWithGuid : IRecord {

		[Required]
		[MinLength(36)]
		[MaxLength(36)]
		string? Guid { get; set; }

	}

}