namespace Hephaestus.Backend.Application.Mappings;

public class LanguageMap : IEntityTypeConfiguration<Language> {

	public void Configure(EntityTypeBuilder<Language> builder) {

		// Table Name
		builder.ToTable("Languages");

		// Primary Key
		builder.HasKey(x => x.Key);
		builder.Property(x => x.Key).HasMaxLength(2).IsUnicode(false).ValueGeneratedNever();

		// Data Seed
		builder.HasData(Language.Seed);

	}

}