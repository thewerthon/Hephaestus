using Architect.Application.Models;
using System.Net.Http.Json;

namespace Frontend.Application.Services.Version {

	public class VersionService(HttpClient httpClient) {

		private VersionInfo? LocalVersion;
		private VersionInfo? ServerVersion;
		private readonly HttpClient? _httpClient = httpClient;

		public VersionInfo GetLocalVersion() {
			LocalVersion = new VersionInfo();
			if (LocalVersion.Notes == string.Empty) LocalVersion.Notes = "- Melhorias de usabilidade e correções gerais.";
			return LocalVersion;
		}

		public async Task<VersionInfo> GetServerVersionAsync() {
			ServerVersion = await _httpClient?.GetFromJsonAsync<VersionInfo>("api/application/versioninfo") ?? new();
			if (ServerVersion.Notes == string.Empty) ServerVersion.Notes = "- Melhorias de usabilidade e correções gerais.";
			return ServerVersion;
		}

	}

}