namespace Hephaestus.Backend.Database {

	public class AppVersionMapping : IEntityTypeConfiguration<AppVersion> {

		public void Configure(EntityTypeBuilder<AppVersion> builder) {

			// Table Name
			builder.ToTable("Versions");

			// Primary Key
			builder.HasKey(x => x.Id);
			builder.Property(x => x.Id).ValueGeneratedOnAdd().UseIdentityColumn();

			// Indexes Configuration
			builder.HasIndex(x => x.Build).IsUnique();
			builder.HasIndex(x => x.Force);

		}

	}

}