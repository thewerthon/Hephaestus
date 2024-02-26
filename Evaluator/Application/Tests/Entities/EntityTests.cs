namespace Hephaestus.Evaluator.Application.Tests;

[Collection("TestCollection")]
public class EntityTests(ApplicationFactory app) {

	private readonly string Endpoint = "/OData/Tests";
	private readonly HttpClient HttpClient = app.HttpClient;

	[Fact]
	public async Task PostAndDeleteAsync() {

		// Arrange
		var time = DateTime.UtcNow;
		var sample = new Test() { Id = 0, Name = "Post Test" };

		// Post Act
		var postResponse = await HttpClient.PostAsJsonAsync($"{Endpoint}?user=1", sample);
		var postContent = await postResponse.Content.ReadFromJsonAsync<Test>();

		// Assert Post Response
		Assert.True(postResponse.IsSuccessStatusCode);

		// Assert Post Content
		Assert.NotNull(postContent);
		Assert.IsType<Test>(postContent);
		Assert.True(postContent.Id > 0);
		Assert.Equal(sample.Name, postContent.Name);

		// Assert Post Trace
		Assert.Equal(1, postContent.CreatedBy);
		Assert.Equal(1, postContent.UpdatedBy);
		Assert.True(postContent.CreatedOn >= time);
		Assert.True(postContent.UpdatedOn >= time);

		// Delete Act
		var deleteResponse = await HttpClient.DeleteAsync($"{Endpoint}({postContent.Id})?user=1");
		var deleteContent = await deleteResponse.Content.ReadAsStringAsync();

		// Assert Delete Response
		Assert.True(deleteResponse.IsSuccessStatusCode);

		// Assert Delete Content
		Assert.Equal(string.Empty, deleteContent);

	}

	[Fact]
	public async Task GetAllAsync() {

		// Act
		var response = await HttpClient.GetAsync($"{Endpoint}?count=true");
		var content = await response.Content.ReadFromJsonAsync<ODataQueryResult<Test>>();

		// Assert Response
		Assert.True(response.IsSuccessStatusCode);

		// Assert Content
		Assert.NotNull(content);
		Assert.IsType<List<Test>>(content.Value);
		Assert.True(content.Value.Count() >= 3);
		Assert.True(content.Count >= 3);

	}

	[Fact]
	public async Task GetCountAsync() {

		// Act
		var response = await HttpClient.GetAsync($"{Endpoint}/$count");
		var count = int.Parse(await response.Content.ReadAsStringAsync());

		// Assert Response
		Assert.True(response.IsSuccessStatusCode);

		// Assert Count
		Assert.True(count >= 3);

	}

	[Theory]
	[InlineData(1)]
	[InlineData(2)]
	[InlineData(3)]
	public async Task GetSingleAsync(int id) {

		// Act
		var response = await HttpClient.GetAsync($"{Endpoint}({id})");
		var content = await response.Content.ReadFromJsonAsync<Test>();

		// Assert Response
		Assert.True(response.IsSuccessStatusCode);

		// Assert Content
		Assert.NotNull(content);
		Assert.IsType<Test>(content);
		Assert.Equal(id, content.Id);

	}

	[Theory]
	[InlineData(1)]
	[InlineData(2)]
	[InlineData(3)]
	public async Task PutAsync(int id) {

		// Arrange
		var time = DateTime.UtcNow;
		var sample = new Test() { Id = id - 1, Name = "Put Test" };

		// Act
		var response = await HttpClient.PutAsJsonAsync($"{Endpoint}({id})?user=2", sample);
		var content = await response.Content.ReadFromJsonAsync<Test>();

		// Assert Response
		Assert.True(response.IsSuccessStatusCode);

		// Assert Content
		Assert.NotNull(content);
		Assert.IsType<Test>(content);
		Assert.Equal(id, content.Id);
		Assert.Equal(sample.Name, content.Name);

		// Assert Trace
		Assert.Equal(1, content.CreatedBy);
		Assert.Equal(2, content.UpdatedBy);
		Assert.True(content.CreatedOn <= time);
		Assert.True(content.UpdatedOn >= time);

	}

	[Theory]
	[InlineData(1)]
	[InlineData(2)]
	[InlineData(3)]
	public async Task PatchAsync(int id) {

		// Arrange
		var time = DateTime.UtcNow;
		var sample = new Test() { Id = id - 1, Name = "Patch Test" };

		// Act
		var response = await HttpClient.PatchAsJsonAsync($"{Endpoint}({id})?user=3", sample);
		var content = await response.Content.ReadFromJsonAsync<Test>();

		// Assert Response
		Assert.True(response.IsSuccessStatusCode);

		// Assert Content
		Assert.NotNull(content);
		Assert.IsType<Test>(content);
		Assert.Equal(id, content.Id);
		Assert.Equal(sample.Name, content.Name);

		// Assert Trace
		Assert.Equal(1, content.CreatedBy);
		Assert.Equal(3, content.UpdatedBy);
		Assert.True(content.CreatedOn <= time);
		Assert.True(content.UpdatedOn >= time);

	}

	[Theory]
	[InlineData(999997)]
	[InlineData(999998)]
	[InlineData(999999)]
	public async Task UpsertAndDeleteAsync(int id) {

		// Arrange
		var time = DateTime.UtcNow;
		var sample = new Test() { Id = id - 1, Name = "Upsert Test" };

		// Act
		var putResponse = await HttpClient.PutAsJsonAsync($"{Endpoint}({id})?user=4", sample);
		var putContent = await putResponse.Content.ReadFromJsonAsync<Test>();

		// Assert Put Response
		Assert.True(putResponse.IsSuccessStatusCode);

		// Assert Put Content
		Assert.NotNull(putContent);
		Assert.IsType<Test>(putContent);
		Assert.True(putContent.Id > 0);
		Assert.Equal(sample.Name, putContent.Name);

		// Assert Put Trace
		Assert.Equal(4, putContent.CreatedBy);
		Assert.Equal(4, putContent.UpdatedBy);
		Assert.True(putContent.CreatedOn >= time);
		Assert.True(putContent.UpdatedOn >= time);

		// Delete Act
		var deleteResponse = await HttpClient.DeleteAsync($"{Endpoint}({putContent.Id})?user=1");
		var deleteContent = await deleteResponse.Content.ReadAsStringAsync();

		// Assert Delete Response
		Assert.True(deleteResponse.IsSuccessStatusCode);

		// Assert Delete Content
		Assert.Equal(string.Empty, deleteContent);

	}

}