using System.Text.Json.Serialization;

namespace Architect.Application.Models {

	public class UserInfo {

		[JsonPropertyName("displayName")]
		public string Name { get; set; } = "Usuário Desconhecido";

		[JsonPropertyName("givenName")]
		public string FirstName { get; set; } = "Usuário";

		[JsonPropertyName("surname")]
		public string SecondName { get; set; } = "Desconhecido";

		[JsonPropertyName("jobTitle")]
		public string JobTitle { get; set; } = "Título Desconhecido";

		[JsonPropertyName("officeLocation")]
		public string Office { get; set; } = "Unidade Desconhecida";

		[JsonPropertyName("photo")]
		public string Photo { get; set; } = "images/user.jpg";

		[JsonPropertyName("mail")]
		public string Email { get; set; } = "usuario@siw.ind.br";

		[JsonPropertyName("role")]
		public string Role { get; set; } = "Acesso Padrão";

	}

}