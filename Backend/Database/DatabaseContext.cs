namespace Hephaestus.Backend.Database {

	public class DatabaseContext(DbContextOptions<DatabaseContext> options) : DbContext(options) {

		// Database Mappings
		protected override void OnModelCreating(ModelBuilder builder) {

			//builder.Entity<AppVersion>().ToTable("Versions");
			//builder.Entity<UserInfo>().ToTable("Users");
			//builder.Entity<Preferences>().ToTable("Preferences");

			builder.ApplyConfiguration(new UserInfoMapping());

			//foreach (var entity in DatabaseMappings.EntityMappings) {

			//	dynamic mapping = Activator.CreateInstance(entity.Maps)!;
			//	builder.ApplyConfiguration(mapping);

			//}

		}

	}

}