namespace Hephaestus.Evaluator.Application.Tests;

public class UsersTests(ApplicationFactory app) : BaseEntityTests<User>(app, "/OData/Users") {

	[Fact]
	public async Task GetUserByGuidAsync() {

		// Arrange
		var guid = "00000000-0000-0000-0000-000000000000";

		// Act
		var response = await HttpClient.GetAsync($"{Endpoint}/{guid}");
		var content = await response.Content.ReadFromJsonAsync<User>();

		// Assert Response
		Assert.True(response.IsSuccessStatusCode);

		// Assert
		Assert.NotNull(content);
		Assert.IsType<User>(content);
		Assert.Equal(1, content.Id);
		Assert.Equal(guid, content.Guid);
		Assert.Equal("Sistema", content.Name);

	}

	[Fact]
	public async Task PutUserByGuidAsync() {

		// Arrange
		var guid = "00000000-0000-0000-0000-000000000000";
		var user = new User() {
			Id = 1,
			Guid = guid,
			Name = "Sistema",
			Email = "sistema@siw.ind.br",
			Photo = "images/users/unknown.jpg",
			Role = "System.Admin",
			Hidden = true,
			Active = true
		};

		// Act
		var response = await HttpClient.PutAsJsonAsync($"{Endpoint}/{guid}", user);
		var content = await response.Content.ReadFromJsonAsync<User>();

		// Assert Response
		Assert.True(response.IsSuccessStatusCode);

		// Assert
		Assert.NotNull(content);
		Assert.IsType<User>(content);
		Assert.Equal(1, content.Id);
		Assert.Equal(guid, content.Guid);
		Assert.Equal("Sistema", content.Name);

	}

}