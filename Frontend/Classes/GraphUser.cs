using System.Text.Json.Serialization;
using Hephaestus.Architect.Interfaces;

namespace Hephaestus.Frontend.Classes {

	public class GraphUser : IUser {

		[JsonPropertyName("0")]
		public int Id { get; set; } = 0;

		[JsonPropertyName("id")]
		public string? Guid { get; set; }

		[JsonPropertyName("displayName")]
		public string? Name { get; set; }

		[JsonPropertyName("givenName")]
		public string? FirstName { get; set; }

		[JsonPropertyName("surname")]
		public string? SecondName { get; set; }

		[JsonPropertyName("country")]
		public string? Country { get; set; }

		[JsonPropertyName("officeLocation")]
		public string? Office { get; set; }

		[JsonPropertyName("department")]
		public string? Department { get; set; }

		[JsonPropertyName("jobTitle")]
		public string? Title { get; set; }

		[JsonPropertyName("mail")]
		public string? Email { get; set; }

		[JsonPropertyName("photo")]
		public string? Photo { get; set; }

		[JsonPropertyName("role")]
		public string? Role { get; set; }

		[JsonPropertyName("accountEnabled")]
		public bool? Active { get; set; }

	}

}