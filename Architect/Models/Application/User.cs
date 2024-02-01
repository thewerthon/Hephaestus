using System.Text.Json.Serialization;
using System.ComponentModel.DataAnnotations;

namespace Hephaestus.Architect.Models {

	public class User {

		[Key]
		[Required]
		[JsonPropertyName("uid")]
		public int Id { get; set; }

		[Required]
		[MinLength(36)]
		[MaxLength(36)]
		[JsonPropertyName("id")]
		public string? Guid { get; set; }

		[Required]
		[MinLength(4)]
		[MaxLength(64)]
		[JsonPropertyName("displayName")]
		public string? Name { get; set; }

		[MinLength(4)]
		[MaxLength(32)]
		[JsonPropertyName("givenName")]
		public string? FirstName { get; set; }

		[MinLength(4)]
		[MaxLength(32)]
		[JsonPropertyName("surname")]
		public string? SecondName { get; set; }

		[MinLength(4)]
		[MaxLength(64)]
		[JsonPropertyName("officeLocation")]
		public string? Office { get; set; }

		[MinLength(4)]
		[MaxLength(64)]
		[JsonPropertyName("jobTitle")]
		public string? Title { get; set; }

		[Required]
		[MinLength(12)]
		[MaxLength(64)]
		[EmailAddress]
		[JsonPropertyName("mail")]
		public string? Email { get; set; }

		[MaxLength(32)]
		[JsonPropertyName("role")]
		public string? Role { get; set; } = "System.User";

		[MaxLength()]
		[JsonPropertyName("photo")]
		public string? Photo { get; set; } = "images/users/unknown.jpg";

	}

}