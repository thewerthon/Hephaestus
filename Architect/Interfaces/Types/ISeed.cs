namespace Hephaestus.Architect.Application.Interfaces;

public interface ISeed<T> where T : class {

	public abstract static IEnumerable<T> Seed { get; }

}