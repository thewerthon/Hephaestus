namespace Hephaestus.Architect.Abstractions.Interfaces;

public interface IEntityWithCode : IEntity {

	[MaxLength(16)]
	public string? Code { get; set; }

}