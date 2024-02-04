namespace Hephaestus.Backend.Database {

	public class DatabaseContext(DbContextOptions<DatabaseContext> options) : DbContext(options) {

		// Database Mappings
		protected override void OnModelCreating(ModelBuilder builder) {

			foreach (var entity in DatabaseMappings.EntityMappings) {

				dynamic mapping = Activator.CreateInstance(entity.Maps)!;
				builder.ApplyConfiguration(mapping);

			}

		}

	}

}