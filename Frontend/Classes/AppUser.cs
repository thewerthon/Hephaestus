using System.Text.Json.Serialization;
using Microsoft.AspNetCore.Components.WebAssembly.Authentication;

<<<<<<<< HEAD:Frontend/Classes/AppUser.cs
namespace Hephaestus.Frontend.Classes {
========
namespace Frontend.Application.Services {
>>>>>>>> main:Frontend/Application/Services/AccountUser.cs

	public class AppUser : RemoteUserAccount {

		[JsonPropertyName("roles")]
		public List<string>? Roles { get; set; }

	}

}