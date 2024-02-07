namespace Hephaestus.Architect.Interfaces {

	public interface IKey {

		[Key]
		[Required]
		[MaxLength(8)]
		string? Key { get; set; }

		[Required]
		[MaxLength(16)]
		string? Name { get; set; }

		[MaxLength(16)]
		string? Name_pt { get; set; }

		[MaxLength(16)]
		string? Name_en { get; set; }

		[MaxLength(16)]
		string? Name_es { get; set; }

	}

}