namespace Hephaestus.Architect.Abstractions.Interfaces;

public interface IEntity {

	[Key]
	[Required]
	public int Id { get; set; }

}