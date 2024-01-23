using System.Text.Json.Serialization;
using Microsoft.AspNetCore.Components.WebAssembly.Authentication;

namespace Frontend.Application.Services.Account {

	public class AccountUser : RemoteUserAccount {

		[JsonPropertyName("roles")]
		public List<string>? Roles { get; set; }

	}

}