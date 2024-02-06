namespace Hephaestus.Backend.Database {

	public class AppVersionTable : IEntityTypeConfiguration<AppVersion> {

		public void Configure(EntityTypeBuilder<AppVersion> builder) {

			// Table Name
			builder.ToTable("Versions");

			// Primary Key
			builder.HasKey(x => x.Build);
			builder.Property(x => x.Build).ValueGeneratedNever();

			// Indexes Configuration
			builder.HasIndex(x => x.Build).IsUnique();
			builder.HasIndex(x => x.Force);

			// Data Seed
			builder.HasData(
				new AppVersion { }
			);

		}

	}

}