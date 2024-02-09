namespace Hephaestus.Architect.Interfaces {

	public interface IPreferences : IRecord {

		int User { get; set; }
		string? Theme { get; set; }
		string? Language { get; set; }

	}

}