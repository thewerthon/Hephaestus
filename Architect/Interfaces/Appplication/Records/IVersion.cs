namespace Hephaestus.Architect.Interfaces {

	public interface IVersion {

		int Build { get; set; }
		int Force { get; set; }
		string Name { get; set; }
		string? Notes { get; set; }

	}

}