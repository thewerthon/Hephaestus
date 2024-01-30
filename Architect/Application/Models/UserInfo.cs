using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace Architect.Application.Models {

	public class UserInfo {

		[Key]
		[JsonPropertyName("uid")]
		public int ID { get; set; }

		[MaxLength(36)]
		[JsonPropertyName("id")]
		public string GUID { get; set; } = string.Empty;

		[MaxLength(64)]
		[JsonPropertyName("displayName")]
		public string? Name { get; set; } = "Unknown User";

		[MaxLength(32)]
		[JsonPropertyName("givenName")]
		public string? FirstName { get; set; } = "Unknown";

		[MaxLength(32)]
		[JsonPropertyName("surname")]
		public string? SecondName { get; set; } = "User";

		[MaxLength(64)]
		[JsonPropertyName("officeLocation")]
		public string? Office { get; set; } = "Unknown";

		[MaxLength(64)]
		[JsonPropertyName("jobTitle")]
		public string? Title { get; set; } = "Unknown";

		[MaxLength(64)]
		[JsonPropertyName("mail")]
		public string? Email { get; set; } = "user@siw.ind.br";

		[MaxLength(32)]
		[JsonPropertyName("role")]
		public string? Role { get; set; } = "System.User";

		[MaxLength()]
		[JsonPropertyName("photo")]
		public string? Photo { get; set; } = "images/users/unknown.jpg";

	}

}