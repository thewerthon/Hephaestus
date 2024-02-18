namespace Hephaestus.Architect.Application.Interfaces;

public interface IEntity {

	[Key]
	[Required]
	public int Id { get; set; }

}