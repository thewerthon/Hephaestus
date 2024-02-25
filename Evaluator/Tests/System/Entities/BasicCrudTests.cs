namespace Hephaestus.Evaluator.Tests;

[Collection("TestCollection")]
public abstract class BasicCrudTests(ApplicationFactory app) {

	private readonly HttpClient HttpClient = app.HttpClient;
	private readonly Test Sample = new();

	[Fact]
	public async Task PostAsync() {

		// Arrange
		Sample.Id = 0;
		Sample.Name = "Post Test";
		var time = DateTime.UtcNow;

		// Act
		var response = await HttpClient.PostAsJsonAsync($"tests?user=1", Sample);
		var content = await response.Content.ReadFromJsonAsync<Test>();

		// Assert
		Assert.NotNull(response);
		Assert.IsType<Test>(content);
		Assert.True(content.Id > 0);
		Assert.Equal(Sample.Name, content.Name);
		Assert.Equal(1, content.CreatedBy);
		Assert.True(content.CreatedOn >= time);
		Assert.Equal(1, content.UpdatedBy);
		Assert.True(content.UpdatedOn >= time);
		Assert.Null(content.DeletedBy);
		Assert.Null(content.DeletedOn);

	}

	[Fact]
	public async Task GetAllAsync() {

		// Act
		var response = await HttpClient.GetFromJsonAsync<ODataQueryResult<Test>>($"tests?count=true");

		// Assert
		Assert.NotNull(response);
		Assert.IsType<List<Test>>(response.Value);
		Assert.True(response.Value.Count() >= 3);
		Assert.True(response.Count >= 3);

	}

	[Fact]
	public virtual async Task GetCountAsync() {

		// Act
		var response = await HttpClient.GetAsync($"tests/$count");
		var count = int.Parse(await response.Content.ReadAsStringAsync());

		// Assert
		Assert.True(count > 0);

	}

	[Fact]
	public virtual async Task GetSingleAsync() {

		// Arrange
		var id = 1;

		// Act
		var response = await HttpClient.GetFromJsonAsync<Test>($"tests({id})");

		// Assert
		Assert.NotNull(response);
		Assert.IsType<Test>(response);
		Assert.Equal(id, response.Id);

	}

	[Fact]
	public virtual async Task PutAsync() {

		// Arrange
		var id = 1;
		Sample.Id = 0;

		// Act
		var response = await HttpClient.PutAsJsonAsync($"tests({id})?user=1", Sample);
		var content = response.Content.ReadFromJsonAsync<Test>();

		// Assert
		Assert.NotNull(response);
		Assert.IsType<Test>(content);
		Assert.Equal(id, content.Id);

	}

	[Fact]
	public virtual async Task PatchAsync() {

		// Arrange
		var id = 1;
		Sample.Id = 0;

		// Act
		var response = await HttpClient.PatchAsJsonAsync($"tests({id})?user=1", Sample);
		var content = response.Content.ReadFromJsonAsync<Test>();

		// Assert
		Assert.NotNull(response);
		Assert.IsType<Test>(content);
		Assert.Equal(id, content.Id);

	}

	[Fact]
	public virtual async Task DeleteAsync() {

		// Arrange
		var id = 1;

		// Act
		var response = await HttpClient.DeleteAsync($"tests({id})?user=1");

		// Assert
		Assert.NotNull(response);
		Assert.True(response.IsSuccessStatusCode);

	}

}