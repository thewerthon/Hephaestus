namespace Hephaestus.Evaluator.Tests;

[Collection("TestCollection")]
public abstract class BaseODataTests<T>(ApplicationFactory app, string endpoint) where T : class {

	protected readonly HttpClient HttpClient = app.HttpClient;
	protected readonly string Endpoint = endpoint;

	[Fact]
	public virtual async Task GetAllAsync() {

		// Act
		var response = await HttpClient.GetFromJsonAsync<ODataQueryResult<T>>($"{Endpoint}?count=true");

		// Assert
		Assert.NotNull(response);
		Assert.IsType<List<T>>(response.Value);
		Assert.True(response.Value.Count() >= 0);
		Assert.True(response.Count >= 0);

	}

	[Fact]
	public virtual async Task GetCountAsync() {

		// Act
		var response = await HttpClient.GetAsync($"{Endpoint}/$count");
		var count = int.Parse(await response.Content.ReadAsStringAsync());

		// Assert
		Assert.True(count > 0);

	}

}