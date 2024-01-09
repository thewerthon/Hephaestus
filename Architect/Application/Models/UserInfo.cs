using System.Text.Json.Serialization;

namespace Architect.Application.Models {

	public class UserInfo {

		[JsonPropertyName("displayName")]
		public string? Name { get; set; }

		[JsonPropertyName("givenName")]
		public string? FirstName { get; set; }

		[JsonPropertyName("surname")]
		public string? SecondName { get; set; }

		[JsonPropertyName("jobTitle")]
		public string? JobTitle { get; set; }

		[JsonPropertyName("officeLocation")]
		public string? Office { get; set; }

		[JsonPropertyName("photo")]
		public string? Photo { get; set; }

		[JsonPropertyName("mail")]
		public string? Email { get; set; }

		[JsonPropertyName("role")]
		public string? Role { get; set; }

	}

}