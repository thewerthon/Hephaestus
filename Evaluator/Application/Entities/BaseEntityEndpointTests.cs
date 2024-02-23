namespace Hephaestus.Evaluator.Application;

public abstract class BaseEntityEndpointTests<TEntity>(string endpoint, TEntity example) where TEntity : class, IEntity {

	protected HttpClient HttpClient = new BackendApplicationFactory().CreateClient();
	protected string Endpoint = endpoint;

	[Fact]
	public virtual async Task PostAsync() {

		// Arrange
		example.Id = 0;

		// Act
		var response = await HttpClient.PostAsJsonAsync($"{Endpoint}?user=1", example);
		var content = response.Content.ReadFromJsonAsync<TEntity>();

		// Assert
		Assert.NotNull(response);
		Assert.IsType<TEntity>(content);
		Assert.True(content.Id > 0);

	}

	[Fact]
	public virtual async Task GetAllAsync() {

		// Act
		var response = await HttpClient.GetFromJsonAsync<ODataQueryResult<TEntity>>($"{Endpoint}?count=true");

		// Assert
		Assert.NotNull(response);
		Assert.IsType<List<TEntity>>(response.Value);
		Assert.True(response.Count > 0);

	}

	[Fact]
	public virtual async Task GetSingleAsync() {

		// Arrange
		var id = 1;

		// Act
		var response = await HttpClient.GetFromJsonAsync<TEntity>($"{Endpoint}({id})");

		// Assert
		Assert.NotNull(response);
		Assert.IsType<TEntity>(response);
		Assert.Equal(id, response.Id);

	}

	[Fact]
	public virtual async Task PutAsync() {

		// Arrange
		var id = 1;
		example.Id = 0;

		// Act
		var response = await HttpClient.PutAsJsonAsync($"{Endpoint}({id})?user=1", example);
		var content = response.Content.ReadFromJsonAsync<TEntity>();

		// Assert
		Assert.NotNull(response);
		Assert.IsType<TEntity>(content);
		Assert.Equal(id, content.Id);

	}

	[Fact]
	public virtual async Task PatchAsync() {

		// Arrange
		var id = 1;
		example.Id = 0;

		// Act
		var response = await HttpClient.PatchAsJsonAsync($"{Endpoint}({id})?user=1", example);
		var content = response.Content.ReadFromJsonAsync<TEntity>();

		// Assert
		Assert.NotNull(response);
		Assert.IsType<TEntity>(content);
		Assert.Equal(id, content.Id);

	}

	[Fact]
	public virtual async Task DeleteAsync() {

		// Arrange
		var id = 1;

		// Act
		var response = await HttpClient.DeleteAsync($"{Endpoint}({id})?user=1");

		// Assert
		Assert.NotNull(response);
		Assert.True(response.IsSuccessStatusCode);

	}

}