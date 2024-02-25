using System.Text.Json.Serialization;
using Microsoft.AspNetCore.Components.WebAssembly.Authentication;

namespace Hephaestus.Frontend.Models;

public class RemoteUser : RemoteUserAccount {

	[JsonPropertyName("roles")]
	public List<string>? Roles { get; set; }

}