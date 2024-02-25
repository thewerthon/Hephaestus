namespace Hephaestus.Architect.Interfaces;

public interface ITypeSeed<T> where T : class {

	public abstract static IEnumerable<T> Seed { get; }

}