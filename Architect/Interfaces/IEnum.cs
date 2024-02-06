namespace Hephaestus.Architect.Interfaces {

	public interface IEnum {

		[Key]
		[Required]
		byte Id { get; set; }

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