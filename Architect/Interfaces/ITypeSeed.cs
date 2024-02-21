namespace Hephaestus.Architect.Application.Interfaces;

public interface ITypeSeed<T> where T : IType {

	public abstract static IEnumerable<T> Seed { get; }

}