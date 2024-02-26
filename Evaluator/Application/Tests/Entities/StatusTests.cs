namespace Hephaestus.Evaluator.Application.Tests;

[Collection("TestCollection")]
public class StatusTests(ApplicationFactory app) {

	protected readonly HttpClient HttpClient = app.HttpClient;

	[Fact]
	public async Task GetStatusAsync() {

		// Act
		var response = await HttpClient.GetAsync($"app/status");

		// Assert
		Assert.True(response.IsSuccessStatusCode);

	}

}