namespace Hephaestus.Frontend.Services {

	public class DatabaseService(NavigationManager navigator, HttpClient client) {

		private readonly HttpClient HttpClient = client;
		private readonly Uri BaseUri = new($"{navigator.BaseUri}odata/");

		public async Task<UserInfo> CreateUserAsync(UserInfo? user = default) {

			var uri = new Uri(BaseUri, $"users");
			var message = new HttpRequestMessage(HttpMethod.Post, uri) {
				Content = new StringContent(ODataJsonSerializer.Serialize(user), Encoding.UTF8, "application/json")
			};

			var response = await HttpClient.SendAsync(message);
			return await HttpResponseMessageExtensions.ReadAsync<UserInfo>(response);

		}

		public async Task<UserInfo> GetUserAsync(int id = default, string? expand = default) {

			var uri = new Uri(BaseUri, $"users({id})");
			uri = ODataExtensions.GetODataUri(uri: uri, expand: expand);
			var message = new HttpRequestMessage(HttpMethod.Get, uri);

			var response = await HttpClient.SendAsync(message);
			return await HttpResponseMessageExtensions.ReadAsync<UserInfo>(response);

		}

		public async Task<ODataServiceResult<UserInfo>> GetUsersAsync(Query query) {

			return await GetUsersAsync(filter: $"{query.Filter}", orderby: $"{query.OrderBy}", top: query.Top, skip: query.Skip, count: query.Top != null && query.Skip != null);

		}

		public async Task<ODataServiceResult<UserInfo>> GetUsersAsync(string? select = default, string? expand = default, string? filter = default, string? orderby = default, bool? count = default, int? top = default, int? skip = default) {

			var uri = new Uri(BaseUri, $"users");
			uri = ODataExtensions.GetODataUri(uri: uri, select: select, expand: expand, filter: filter, orderby: orderby, count: count, top: top, skip: skip);

			var message = new HttpRequestMessage(HttpMethod.Get, uri);
			var response = await HttpClient.SendAsync(message);
			return await HttpResponseMessageExtensions.ReadAsync<ODataServiceResult<UserInfo>>(response);

		}

		public async Task<HttpResponseMessage> UpdateUserAsync(int id = default, UserInfo? user = default) {

			var uri = new Uri(BaseUri, $"users({id})");
			var message = new HttpRequestMessage(HttpMethod.Patch, uri) {
				Content = new StringContent(ODataJsonSerializer.Serialize(user), Encoding.UTF8, "application/json")
			};

			return await HttpClient.SendAsync(message);

		}

		public async Task<HttpResponseMessage> DeleteUserAsync(int id = default) {

			var uri = new Uri(BaseUri, $"Users({id})");
			var message = new HttpRequestMessage(HttpMethod.Delete, uri);
			return await HttpClient.SendAsync(message);

		}

	}

}