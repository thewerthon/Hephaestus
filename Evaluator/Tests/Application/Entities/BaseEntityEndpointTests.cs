namespace Hephaestus.Evaluator;

[Collection("TestCollection")]
public abstract class BaseEntityEndpointTests<T>(ApplicationFactory app, string endpoint, T sample) where T : class, IEntity {

	protected HttpClient HttpClient = app.HttpClient;

	[Fact]
	public virtual async Task PostAsync() {

		// Arrange
		sample.Id = 0;

		// Act
		var response = await HttpClient.PostAsJsonAsync($"{endpoint}?user=1", sample);
		var content = response.Content.ReadFromJsonAsync<T>();

		// Assert
		Assert.NotNull(response);
		Assert.IsType<T>(content);
		Assert.True(content.Id > 0);

	}

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
	public virtual async Task GetCountAsync() {

		// Act
		var response = await HttpClient.GetAsync($"{endpoint}/$count");
		var count = int.Parse(await response.Content.ReadAsStringAsync());

		// Assert
		Assert.True(count > 0);

	}

	[Fact]
	public virtual async Task GetSingleAsync() {

		// Arrange
		var id = 1;

		// Act
		var response = await HttpClient.GetFromJsonAsync<T>($"{endpoint}({id})");

		// Assert
		Assert.NotNull(response);
		Assert.IsType<T>(response);
		Assert.Equal(id, response.Id);

	}

	[Fact]
	public virtual async Task PutAsync() {

		// Arrange
		var id = 1;
		sample.Id = 0;

		// Act
		var response = await HttpClient.PutAsJsonAsync($"{endpoint}({id})?user=1", sample);
		var content = response.Content.ReadFromJsonAsync<T>();

		// Assert
		Assert.NotNull(response);
		Assert.IsType<T>(content);
		Assert.Equal(id, content.Id);

	}

	[Fact]
	public virtual async Task PatchAsync() {

		// Arrange
		var id = 1;
		sample.Id = 0;

		// Act
		var response = await HttpClient.PatchAsJsonAsync($"{endpoint}({id})?user=1", sample);
		var content = response.Content.ReadFromJsonAsync<T>();

		// Assert
		Assert.NotNull(response);
		Assert.IsType<T>(content);
		Assert.Equal(id, content.Id);

	}

	[Fact]
	public virtual async Task DeleteAsync() {

		// Arrange
		var id = 1;

		// Act
		var response = await HttpClient.DeleteAsync($"{endpoint}({id})?user=1");

		// Assert
		Assert.NotNull(response);
		Assert.True(response.IsSuccessStatusCode);

	}

}