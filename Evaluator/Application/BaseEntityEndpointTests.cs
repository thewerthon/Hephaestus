namespace Hephaestus.Evaluator.Application;

public abstract class BaseEntityEndpointTests<TEntity>(string endpoint) where TEntity : class, IEntity {

	protected string Endpoint = endpoint;

	[Fact]
	public async Task GetAllAsync() {

		// Arrange
		var backend = new BackendApplicationFactory();
		var client = backend.CreateClient();

		// Act
		var response = await client.GetFromJsonAsync<ODataQueryResult<TEntity>>($"{Endpoint}?count=true");

		// Assert
		Assert.NotNull(response);
		Assert.IsType<List<TEntity>>(response.Value);
		Assert.True(response.Count >= 1);

	}

}