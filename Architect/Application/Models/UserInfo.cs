using System.Text.Json.Serialization;

namespace Architect.Application.Models {

	public class UserInfo {

		[JsonPropertyName("id")]
		public Guid? Id { get; set; }

		[JsonPropertyName("displayName")]
		public string? Name { get; set; } = "Unknown User";

		[JsonPropertyName("givenName")]
		public string? FirstName { get; set; } = "Unknown";

		[JsonPropertyName("surname")]
		public string? SecondName { get; set; } = "User";

		[JsonPropertyName("jobTitle")]
		public string? JobTitle { get; set; } = "Unknown";

		[JsonPropertyName("officeLocation")]
		public string? Office { get; set; } = "Unknown";

		[JsonPropertyName("photo")]
		public string? Photo { get; set; } = "images/users/unknown.jpg";

		[JsonPropertyName("mail")]
		public string? Email { get; set; } = "user@siw.ind.br";

		[JsonPropertyName("role")]
		public string? Role { get; set; } = "System.User";

	}

}