namespace Hephaestus.Architect.Interfaces {

	public interface IRecord {

		[Key]
		[Required]
		int Id { get; set; }

	}

}