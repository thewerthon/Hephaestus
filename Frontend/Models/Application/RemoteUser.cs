using System.Text.Json.Serialization;
using Microsoft.AspNetCore.Components.WebAssembly.Authentication;

namespace Hephaestus.Frontend.Application.Models;

public class RemoteUser : RemoteUserAccount {

	[JsonPropertyName("roles")]
	public List<string>? Roles { get; set; }

}