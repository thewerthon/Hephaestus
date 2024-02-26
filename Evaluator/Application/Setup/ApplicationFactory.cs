namespace Hephaestus.Evaluator.Application.Setup;

public class ApplicationFactory : WebApplicationFactory<Program> {

	// Http Client
	public HttpClient HttpClient { get; private set; } = default!;

	// Constructor
	public ApplicationFactory() {

		HttpClient = CreateClient();

	}

	// Configure Web Host
	protected override void ConfigureWebHost(IWebHostBuilder builder) {

		// Setup Environment
		builder.UseEnvironment("Test");

	}

}