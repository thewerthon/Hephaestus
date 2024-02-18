namespace Hephaestus.Backend.Application.Mappings;

public class ThemeMap : IEntityTypeConfiguration<Theme> {

	public void Configure(EntityTypeBuilder<Theme> builder) {

		// Table Name
		builder.ToTable("Themes");

		// Primary Key
		builder.HasKey(x => x.Key);
		builder.Property(x => x.Key).IsUnicode(false).ValueGeneratedNever();

		// Data Seed
		builder.HasData([
			new Theme { Key = "auto",   Value = "Automático",   Value_en = "Automatic",    Value_es = "Automático" },
			new Theme { Key = "light",  Value = "Tema Claro",   Value_en = "Light Theme",  Value_es = "Tema Claro" },
			new Theme { Key = "dark",   Value = "Tema Escuro",  Value_en = "Dark Theme",   Value_es = "Tema Oscuro" }
		]);

	}

}