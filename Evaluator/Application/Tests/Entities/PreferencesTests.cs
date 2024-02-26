namespace Hephaestus.Evaluator.Application.Tests;

public class PreferencesTests(ApplicationFactory app) : BaseEntityTests<User>(app, "/OData/Preferences") {

	[Fact]
	public async Task GetPreferencesByUserAsync() {

		// Arrange
		var user = 1;

		// Act
		var response = await HttpClient.GetAsync($"{Endpoint}/{user}");
		var content = await response.Content.ReadFromJsonAsync<Preferences>();

		// Assert Response
		Assert.True(response.IsSuccessStatusCode);

		// Assert
		Assert.NotNull(content);
		Assert.IsType<Preferences>(content);
		Assert.Equal(1, content.Id);
		Assert.Equal(user, content.User);
		Assert.Equal("auto", content.Theme);
		Assert.Equal("pt", content.Language);

	}

	[Fact]
	public async Task PutPreferencesByUserAsync() {

		// Arrange
		var user = 1;
		var preferences = new Preferences() {
			Id = 1,
			User = 1,
			Theme = "auto",
			Language = "pt"
		};

		// Act
		var response = await HttpClient.PutAsJsonAsync($"{Endpoint}/{user}", preferences);
		var content = await response.Content.ReadFromJsonAsync<Preferences>();

		// Assert Response
		Assert.True(response.IsSuccessStatusCode);

		// Assert
		Assert.NotNull(content);
		Assert.IsType<Preferences>(content);
		Assert.Equal(1, content.Id);
		Assert.Equal(user, content.User);
		Assert.Equal("auto", content.Theme);
		Assert.Equal("pt", content.Language);

	}

}