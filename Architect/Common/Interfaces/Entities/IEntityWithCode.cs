namespace Hephaestus.Architect.Application.Interfaces;

public interface IEntityWithCode : IEntity {

	[MaxLength(16)]
	public string? Code { get; set; }

}