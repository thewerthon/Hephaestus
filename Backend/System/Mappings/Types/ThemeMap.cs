namespace Hephaestus.Backend.Application.Mappings;

public class ThemeMap : IEntityTypeConfiguration<Theme> {

	public void Configure(EntityTypeBuilder<Theme> builder) {

		// Table Name
		builder.ToTable("Themes");

		// Primary Key
		builder.HasKey(x => x.Key);
		builder.Property(x => x.Key).HasMaxLength(5).IsUnicode(false).ValueGeneratedNever();

		// Data Seed
		builder.HasData(Theme.Seed);

	}

}