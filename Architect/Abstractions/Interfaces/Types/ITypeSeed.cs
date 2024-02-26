namespace Hephaestus.Architect.Abstractions.Interfaces;

public interface ITypeSeed<T> where T : class {

	public abstract static IEnumerable<T> Seed { get; }

}