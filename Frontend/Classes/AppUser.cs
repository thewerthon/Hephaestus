using System.Text.Json.Serialization;
using Microsoft.AspNetCore.Components.WebAssembly.Authentication;

namespace Hephaestus.Frontend.Classes {

	public class AppUser : RemoteUserAccount {

		[JsonPropertyName("roles")]
		public List<string>? Roles { get; set; }

	}

}