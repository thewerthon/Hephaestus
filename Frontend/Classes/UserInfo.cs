using System.Text.Json.Serialization;

namespace Hephaestus.Frontend.Classes {

	public class UserInfo {

		[JsonPropertyName("id")]
		public string? Guid { get; set; }

		[JsonPropertyName("displayName")]
		public string? Name { get; set; }

		[JsonPropertyName("givenName")]
		public string? FirstName { get; set; }

		[JsonPropertyName("surname")]
		public string? SecondName { get; set; }

		[JsonPropertyName("officeLocation")]
		public string? Office { get; set; }

		[JsonPropertyName("jobTitle")]
		public string? Title { get; set; }

		[JsonPropertyName("mail")]
		public string? Email { get; set; }

		[JsonPropertyName("role")]
		public string? Role { get; set; } = "System.User";

		[JsonPropertyName("photo")]
		public string? Photo { get; set; } = "images/users/unknown.jpg";

	}

}