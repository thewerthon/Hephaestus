namespace Hephaestus.Evaluator.Application;

internal class BackendApplicationFactory : WebApplicationFactory<Program> {

	protected override void ConfigureWebHost(IWebHostBuilder builder) {

		// Setup Environment
		builder.UseEnvironment("Test");

	}

}