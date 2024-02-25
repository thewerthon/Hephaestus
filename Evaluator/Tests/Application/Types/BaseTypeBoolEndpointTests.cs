namespace Hephaestus.Evaluator;

[Collection("TestCollection")]
public abstract class BaseTypeBoolEndpointTests<T>(ApplicationFactory app, string endpoint) where T : class, ITypeBool {

	protected HttpClient HttpClient = app.HttpClient;

	[Fact]
	public virtual async Task GetAllAsync() {

		// Act
		var response = await HttpClient.GetFromJsonAsync<ODataQueryResult<T>>($"{endpoint}?count=true");

		// Assert
		Assert.NotNull(response);
		Assert.IsType<List<T>>(response.Value);
		Assert.True(response.Count > 0);

	}

	[Fact]
	public virtual async Task GetSingleAsync() {

		// Arrange
		var key = false;

		// Act
		var response = await HttpClient.GetFromJsonAsync<T>($"{endpoint}({key})");

		// Assert
		Assert.NotNull(response);
		Assert.IsType<T>(response);
		Assert.Equal(key, response.Key);

	}

}