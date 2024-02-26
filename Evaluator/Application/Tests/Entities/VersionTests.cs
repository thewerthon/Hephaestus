namespace Hephaestus.Evaluator.Application.Tests;

[Collection("TestCollection")]
public class VersionTests(ApplicationFactory app) {

	protected readonly HttpClient HttpClient = app.HttpClient;

	[Fact]
	public async Task GetStatusAsync() {

		// Arange
		var version = new Version();

		// Act
		var response = await HttpClient.GetAsync($"app/version");
		var content = await response.Content.ReadFromJsonAsync<Version>();

		// Assert
		Assert.NotNull(content);
		Assert.True(response.IsSuccessStatusCode);
		Assert.Equal(version.Build, content.Build);
		Assert.Equal(version.Force, content.Force);
		Assert.Equal(version.Name, content.Name);

	}

}