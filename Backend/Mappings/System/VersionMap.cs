namespace Hephaestus.Backend.Application.Mappings;

public class VersionMap : IEntityTypeConfiguration<Version> {

	public void Configure(EntityTypeBuilder<Version> builder) {

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
			new Version()
		);

	}

}