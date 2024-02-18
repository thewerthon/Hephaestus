namespace Hephaestus.Backend.Application.Mappings;

public class LanguageMap : IEntityTypeConfiguration<Language> {

	public void Configure(EntityTypeBuilder<Language> builder) {

		// Table Name
		builder.ToTable("Languages");

		// Primary Key
		builder.HasKey(x => x.Key);
		builder.Property(x => x.Key).IsUnicode(false).ValueGeneratedNever();

		// Data Seed
		builder.HasData([
			new Language { Key = "pt", Value = "Português (BR)", Value_en = "Portuguese (BR)", Value_es = "Portugués (BR)" },
			new Language { Key = "en", Value = "Inglês (EUA)",   Value_en = "English (US)",    Value_es = "Inglés (EUA)" },
			new Language { Key = "es", Value = "Espanhol (ES)",  Value_en = "Spanish (SP)",    Value_es = "Español (ES)" }
		]);

	}

}