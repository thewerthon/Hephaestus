namespace Hephaestus.Architect.Interfaces;

public interface IEntity {

	[Key]
	[Required]
	public int Id { get; set; }

}