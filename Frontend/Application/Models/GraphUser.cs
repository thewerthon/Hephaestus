using System.Text.Json.Serialization;

namespace Hephaestus.Frontend.Application.Models;

public class GraphUser {

	[JsonPropertyName("id")]
	public string Guid { get; set; } = default!;

	[JsonPropertyName("displayName")]
	public string? Name { get; set; }

	[JsonPropertyName("givenName")]
	public string? FirstName { get; set; }

	[JsonPropertyName("surname")]
	public string? LastName { get; set; }

	[JsonPropertyName("department")]
	public string? Department { get; set; }

	[JsonPropertyName("officeLocation")]
	public string? Office { get; set; }

	[JsonPropertyName("country")]
	public string? Country { get; set; }

	[JsonPropertyName("jobTitle")]
	public string? Title { get; set; }

	[JsonPropertyName("mail")]
	public string? Email { get; set; }

	[JsonPropertyName("photo")]
	public string? Photo { get; set; }

	[JsonPropertyName("role")]
	public string? Role { get; set; }

	[JsonPropertyName("accountEnabled")]
	public bool Active { get; set; }

	public static implicit operator User(GraphUser info) {

		return new User {

			Guid = info.Guid,
			Name = info.Name,
			FirstName = info.FirstName,
			LastName = info.LastName,
			Department = info.Department,
			Office = info.Office,
			Country = info.Country,
			Title = info.Title,
			Email = info.Email,
			Photo = info.Photo,
			Role = info.Role,
			Active = info.Active

		};

	}

}