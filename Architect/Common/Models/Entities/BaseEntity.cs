namespace Hephaestus.Architect.Application.Models;

public abstract class BaseEntity : IEntity {

	[Key]
	[Required]
	public int Id { get; set; } = 0;

}