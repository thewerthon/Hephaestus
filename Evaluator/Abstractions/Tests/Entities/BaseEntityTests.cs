namespace Hephaestus.Evaluator.Abstractions.Tests;

[Collection("TestCollection")]
public abstract class BaseEntityTests<T>(ApplicationFactory app, string endpoint) : BaseODataTests<T>(app, endpoint) where T : class, IEntity { }