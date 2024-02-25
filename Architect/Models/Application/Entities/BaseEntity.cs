namespace Hephaestus.Architect.Models;

public abstract class BaseEntity : IEntity {

	[Key]
	[Required]
	public int Id { get; set; } = 0;

}