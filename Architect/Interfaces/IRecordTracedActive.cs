using Hephaestus.Architect.Models;

namespace Hephaestus.Architect.Interfaces {

	public interface IRecordTracedActive : IRecordTraced {

		bool? Active { get; set; }

		UserInfo? DeletedBy { get; set; }

		DateTime? DeletedOn { get; set; }

	}

}