namespace Hephaestus.Evaluator.Abstractions.Tests;

[Collection("TestCollection")]
public abstract class BaseODataTests<T>(ApplicationFactory app, string endpoint) where T : class {

	protected readonly HttpClient HttpClient = app.HttpClient;
	protected readonly string Endpoint = endpoint;

	[Fact]
	public virtual async Task GetAllAsync() {

		// Act
		var response = await HttpClient.GetAsync($"{Endpoint}?count=true");
		var content = await response.Content.ReadFromJsonAsync<ODataQueryResult<T>>();

		// Assert Status
		Assert.True(response.IsSuccessStatusCode);

		// Assert Content
		Assert.NotNull(content);
		Assert.IsType<List<T>>(content.Value);
		Assert.True(content.Value.Count() >= 0);
		Assert.True(content.Count >= 0);

	}

	[Fact]
	public virtual async Task GetCountAsync() {

		// Act
		var response = await HttpClient.GetAsync($"{Endpoint}/$count");
		var count = int.Parse(await response.Content.ReadAsStringAsync());

		// Assert Status
		Assert.True(response.IsSuccessStatusCode);

		// Assert Content
		Assert.True(count > 0);

	}

}