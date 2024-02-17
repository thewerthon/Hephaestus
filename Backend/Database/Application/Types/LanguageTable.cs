namespace Hephaestus.Backend.Database {

	public class LanguageTable : IEntityTypeConfiguration<Language> {

		public void Configure(EntityTypeBuilder<Language> builder) {

			// Table Name
			builder.ToTable("Languages");

			// Primary Key
			builder.HasKey(x => x.Key);
			builder.Property(x => x.Key).IsUnicode(false).ValueGeneratedNever();

			// Data Seed
			builder.HasData(
				new Language { Key = "pt", Name = "Português (BR)", Name_en = "Portuguese (BR)", Name_es = "Portugués (BR)" },
				new Language { Key = "en", Name = "Inglês (EUA)", Name_en = "English (US)", Name_es = "Inglés (EUA)" },
				new Language { Key = "es", Name = "Espanhol (ES)", Name_en = "Spanish (SP)", Name_es = "Español (ES)" }
			);

		}

	}

}