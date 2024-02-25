namespace Hephaestus.Backend.Database;

public class DatabaseContext(DbContextOptions<DatabaseContext> options) : DbContext(options) {

	protected override void OnModelCreating(ModelBuilder builder) {

		foreach (var table in DatabaseMappings.Tables) {

			dynamic definition = Activator.CreateInstance(table.TDef)!;
			builder.ApplyConfiguration(definition);

		}

	}

}