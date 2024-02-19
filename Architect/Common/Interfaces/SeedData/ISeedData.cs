namespace Hephaestus.Architect.Application.Interfaces;

public interface ISeedData<T> {

	public abstract static IEnumerable<T> Seed { get; }

}