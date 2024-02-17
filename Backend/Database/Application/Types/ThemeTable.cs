namespace Hephaestus.Backend.Database {

	public class ThemeTable : IEntityTypeConfiguration<Theme> {

		public void Configure(EntityTypeBuilder<Theme> builder) {

			// Table Name
			builder.ToTable("Themes");

			// Primary Key
			builder.HasKey(x => x.Key);
			builder.Property(x => x.Key).IsUnicode(false).ValueGeneratedNever();

			// Data Seed
			builder.HasData(
				new Theme { Key = "auto", Name = "Automático", Name_en = "Automatic", Name_es = "Automático" },
				new Theme { Key = "light", Name = "Tema Claro", Name_en = "Light Theme", Name_es = "Tema Claro" },
				new Theme { Key = "dark", Name = "Tema Escuro", Name_en = "Dark Theme", Name_es = "Tema Oscuro" }
			);

		}

	}

}