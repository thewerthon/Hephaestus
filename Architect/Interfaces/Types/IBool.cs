namespace Hephaestus.Architect.Interfaces {

	public interface IBool {

		[Key]
		[Required]
		bool Id { get; set; }

		[Required]
		[MaxLength(8)]
		string Name { get; set; }

		[MaxLength(8)]
		string? Name_en { get; set; }

		[MaxLength(8)]
		string? Name_es { get; set; }

	}

}