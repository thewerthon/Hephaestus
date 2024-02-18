namespace Hephaestus.Frontend.Application.Services;

public class DatabaseService(NavigationManager navigator, HttpClient client) {

	private readonly HttpClient HttpClient = client;
	private readonly Uri BaseUri = new($"{navigator.BaseUri}odata/");

	// POST
	public async Task<T> PostAsync<T>(string table, T? item = default) {

		var uri = new Uri(BaseUri, $"{table}");
		var message = new HttpRequestMessage(HttpMethod.Post, uri) {
			Content = new StringContent(ODataJsonSerializer.Serialize(item), Encoding.UTF8, "application/json")
		};

		var response = await HttpClient.SendAsync(message);
		return await HttpResponseMessageExtensions.ReadAsync<T>(response);

	}

	// GET By Query
	public async Task<T> GetItemAsync<T>(string table, Query query) {

		return await GetItemAsync<T>(table: table, select: query.Select, expand: query.Expand, filter: $"{query.Filter}");

	}

	// GET By Parameters
	public async Task<T> GetItemAsync<T>(string table, string? select = default, string? expand = default, string? filter = default) {

		var uri = new Uri(BaseUri, $"{table}");
		uri = ODataExtensions.GetODataUri(uri: uri, select: select, expand: expand, filter: filter, top: 1);
		var message = new HttpRequestMessage(HttpMethod.Get, uri);

		var response = await HttpClient.SendAsync(message);
		return await HttpResponseMessageExtensions.ReadAsync<T>(response);

	}

	// GET By Id
	public async Task<T> GetItemAsync<T>(string table, int id = default, string? select = default, string? expand = default) {

		var uri = new Uri(BaseUri, $"{table}({id})");
		uri = ODataExtensions.GetODataUri(uri: uri, select: select, expand: expand);
		var message = new HttpRequestMessage(HttpMethod.Get, uri);

		var response = await HttpClient.SendAsync(message);
		return await HttpResponseMessageExtensions.ReadAsync<T>(response);

	}

	// GET All By Query
	public async Task<ODataServiceResult<T>> GetItemsAsync<T>(string table, Query query) {

		return await GetItemsAsync<T>(table: table, select: query.Select, expand: query.Expand, filter: $"{query.Filter}", orderby: $"{query.OrderBy}", top: query.Top, skip: query.Skip, count: query.Top != null && query.Skip != null);

	}

	// GET All By Parameters
	public async Task<ODataServiceResult<T>> GetItemsAsync<T>(string table, string? select = default, string? expand = default, string? filter = default, string? orderby = default, int? top = default, int? skip = default, bool? count = default) {

		var uri = new Uri(BaseUri, $"{table}");
		uri = ODataExtensions.GetODataUri(uri: uri, select: select, expand: expand, filter: filter, orderby: orderby, count: count, top: top, skip: skip);
		var message = new HttpRequestMessage(HttpMethod.Get, uri);

		var response = await HttpClient.SendAsync(message);
		return await HttpResponseMessageExtensions.ReadAsync<ODataServiceResult<T>>(response);

	}

	// PUT
	public async Task<T> PutAsync<T>(string table, int id = default, T? item = default) {

		var uri = new Uri(BaseUri, $"{table}({id})");
		var message = new HttpRequestMessage(HttpMethod.Put, uri) {
			Content = new StringContent(ODataJsonSerializer.Serialize(item), Encoding.UTF8, "application/json")
		};

		var response = await HttpClient.SendAsync(message);
		return await HttpResponseMessageExtensions.ReadAsync<T>(response);

	}

	// PATCH
	public async Task<HttpResponseMessage> PatchAsync<T>(string table, int id = default, T? item = default) {

		var uri = new Uri(BaseUri, $"{table}({id})");
		var message = new HttpRequestMessage(HttpMethod.Patch, uri) {
			Content = new StringContent(ODataJsonSerializer.Serialize(item), Encoding.UTF8, "application/json")
		};

		return await HttpClient.SendAsync(message);

	}

	// DELETE
	public async Task<HttpResponseMessage> DeleteAsync<T>(string table, int id = default) {

		var uri = new Uri(BaseUri, $"{table}({id})");
		var message = new HttpRequestMessage(HttpMethod.Delete, uri);

		return await HttpClient.SendAsync(message);

	}

	// Status
	public async Task<bool> CheckStatusAsync() {

		var uri = new Uri(BaseUri, $"status");
		var message = new HttpRequestMessage(HttpMethod.Get, uri);
		var result = await HttpClient.SendAsync(message);

		return result.IsSuccessStatusCode;

	}

}