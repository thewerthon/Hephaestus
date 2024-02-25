using System.Text.Json.Serialization;

namespace Hephaestus.Architect.Models;

public class ODataQueryResult<T> {

	[JsonPropertyName("@odata.count")]
	public int? Count { get; set; }

	[JsonPropertyName("value")]
	public IEnumerable<T>? Value { get; set; }

}