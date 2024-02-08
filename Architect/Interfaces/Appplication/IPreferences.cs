namespace Hephaestus.Architect.Interfaces {

	public interface IPreferences {

		int Id { get; set; }
		int User { get; set; }
		string? Theme { get; set; }
		string? Language { get; set; }

	}

}