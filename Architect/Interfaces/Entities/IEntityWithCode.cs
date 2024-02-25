namespace Hephaestus.Architect.Interfaces;

public interface IEntityWithCode : IEntity {

	[MaxLength(16)]
	public string? Code { get; set; }

}