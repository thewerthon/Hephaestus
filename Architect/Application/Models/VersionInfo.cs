namespace Architect.Application.Models {

	public class VersionInfo {

		public int Build { get; set; } = 1;
		public int Forced { get; set; } = 1;
		public string Version { get; set; } = "v2.0.0 (Alpha 1)";
		public string Notes { get; set; } =
			""
		;

	}

}