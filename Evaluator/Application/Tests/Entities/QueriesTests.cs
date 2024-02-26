namespace Hephaestus.Evaluator.Application.Tests;

[Collection("TestCollection")]
public class QueriesTest(ApplicationFactory app) {

	private readonly string Endpoint = "/OData/Tests";
	private readonly HttpClient HttpClient = app.HttpClient;

	[Fact]
	public async Task GetSingleWithSelectAsync() {

		// Arrange
		var id = 1;

		// Act
		var response = await HttpClient.GetAsync($"{Endpoint}({id})?select=id");
		var content = await response.Content.ReadFromJsonAsync<Test>();

		// Assert Response
		Assert.True(response.IsSuccessStatusCode);

		// Assert Content
		Assert.NotNull(content);
		Assert.IsType<Test>(content);
		Assert.Equal(id, content.Id);
		Assert.Null(content.Name);

	}

	[Fact]
	public async Task GetSingleWithExpandAsync() {

		// Arrange
		var id = 1;

		// Act
		var response = await HttpClient.GetAsync($"{Endpoint}({id})?expand=CreatedByData");
		var content = await response.Content.ReadFromJsonAsync<Test>();

		// Assert Response
		Assert.True(response.IsSuccessStatusCode);

		// Assert Content
		Assert.NotNull(content);
		Assert.IsType<Test>(content);
		Assert.Equal(id, content.Id);
		Assert.NotNull(content.CreatedByData);

	}

	[Fact]
	public async Task GetSingleWithComputeAsync() {

		// Arrange
		var id = 1;

		// Act
		var response = await HttpClient.GetAsync($"{Endpoint}({id})?select=Id,Id2 & compute=Id mul 10 as Id2");
		var content = await response.Content.ReadAsStringAsync();

		// Assert Response
		Assert.True(response.IsSuccessStatusCode);

		// Assert Content
		Assert.NotNull(content);
		Assert.Contains("\"Id\":1", content);
		Assert.Contains("\"Id2\":10", content);

	}

	[Fact]
	public async Task GetCollectionWithSelectAsync() {

		// Act
		var response = await HttpClient.GetAsync($"{Endpoint}?select=id");
		var content = await response.Content.ReadFromJsonAsync<ODataQueryResult<Test>>();

		// Assert Response
		Assert.True(response.IsSuccessStatusCode);

		// Assert Content
		Assert.NotNull(content);
		Assert.IsType<List<Test>>(content.Value);
		Assert.True(content.Value.Count() >= 3);
		Assert.Null(content.Value.First().Name);
		Assert.Null(content.Value.Last().Name);

	}

	[Fact]
	public async Task GetCollectionWithExpandAsync() {

		// Act
		var response = await HttpClient.GetAsync($"{Endpoint}?expand=CreatedByData");
		var content = await response.Content.ReadFromJsonAsync<ODataQueryResult<Test>>();

		// Assert Response
		Assert.True(response.IsSuccessStatusCode);

		// Assert Content
		Assert.NotNull(content);
		Assert.IsType<List<Test>>(content.Value);
		Assert.True(content.Value.Count() >= 3);
		Assert.NotNull(content.Value.First().CreatedByData);
		Assert.NotNull(content.Value.Last().CreatedByData);

	}

	[Fact]
	public async Task GetCollectionWithFilterAsync() {

		// Act
		var response = await HttpClient.GetAsync($"{Endpoint}?filter=id lt 3");
		var content = await response.Content.ReadFromJsonAsync<ODataQueryResult<Test>>();

		// Assert Response
		Assert.True(response.IsSuccessStatusCode);

		// Assert Content
		Assert.NotNull(content);
		Assert.IsType<List<Test>>(content.Value);
		Assert.True(content.Value.Count() <= 2);

	}

	[Fact]
	public async Task GetCollectionWithOrderByAsync() {

		// Act
		var response = await HttpClient.GetAsync($"{Endpoint}?orderby=Id desc");
		var content = await response.Content.ReadFromJsonAsync<ODataQueryResult<Test>>();

		// Assert Response
		Assert.True(response.IsSuccessStatusCode);

		// Assert Content
		Assert.NotNull(content);
		Assert.IsType<List<Test>>(content.Value);
		Assert.True(content.Value.Count() >= 3);
		Assert.True(content.Value.First().Id >= 1);
		Assert.True(content.Value.Last().Id <= 1);

	}

	[Fact]
	public async Task GetCollectionWithCountAsync() {

		// Act
		var response = await HttpClient.GetAsync($"{Endpoint}?count=true");
		var content = await response.Content.ReadFromJsonAsync<ODataQueryResult<Test>>();

		// Assert Response
		Assert.True(response.IsSuccessStatusCode);

		// Assert Content
		Assert.NotNull(content);
		Assert.IsType<List<Test>>(content.Value);
		Assert.True(content.Count >= 3);

	}

	[Fact]
	public async Task GetCollectionWithTopSkipAsync() {

		// Act
		var response = await HttpClient.GetAsync($"{Endpoint}?top=1&skip=1&orderby=id");
		var content = await response.Content.ReadFromJsonAsync<ODataQueryResult<Test>>();

		// Assert Response
		Assert.True(response.IsSuccessStatusCode);

		// Assert Content
		Assert.NotNull(content);
		Assert.IsType<List<Test>>(content.Value);
		Assert.Equal(2, Assert.Single(content.Value).Id);

	}

	[Fact]
	public async Task GetCollectionWithSearchAsync() {

		// Act
		var response = await HttpClient.GetAsync($"{Endpoint}?search=\"3\"");
		var content = await response.Content.ReadFromJsonAsync<ODataQueryResult<Test>>();

		// Assert Response
		Assert.True(response.IsSuccessStatusCode);

		// Assert Content
		Assert.NotNull(content);
		Assert.IsType<List<Test>>(content.Value);
		Assert.Equal(3, Assert.Single(content.Value).Id);

	}

	[Fact]
	public async Task GetCollectionWithApplyAsync() {

		// Act
		var response = await HttpClient.GetAsync($"{Endpoint}?apply=groupby((Name),aggregate(Id with sum as Total))");
		var content = await response.Content.ReadAsStringAsync();

		// Assert Response
		Assert.True(response.IsSuccessStatusCode);

		// Assert Content
		Assert.NotNull(content);
		Assert.Contains("Name", content);
		Assert.Contains("Total", content);

	}

	[Fact]
	public async Task GetCollectionWithComputeAsync() {

		// Act
		var response = await HttpClient.GetAsync($"{Endpoint}?select=Id,Id2 & compute=Id mul 10 as Id2");
		var content = await response.Content.ReadAsStringAsync();

		// Assert Response
		Assert.True(response.IsSuccessStatusCode);

		// Assert Content
		Assert.NotNull(content);
		Assert.Contains("\"Id\":1", content);
		Assert.Contains("\"Id2\":10", content);

	}

}