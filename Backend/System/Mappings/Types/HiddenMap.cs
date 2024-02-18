namespace Hephaestus.Backend.Application.Mappings;

public class HiddenMap : IEntityTypeConfiguration<Hidden> {

	public void Configure(EntityTypeBuilder<Hidden> builder) {

		// Table Name
		builder.ToTable("Hidden");

		// Primary Key
		builder.HasKey(x => x.Key);
		builder.Property(x => x.Key).ValueGeneratedNever();

		// Data Seed
		builder.HasData([
			new Hidden { Key = true,  Value = "Sim", Value_en = "Yes", Value_es = "Sí" },
			new Hidden { Key = false, Value = "Não", Value_en = "No",  Value_es = "No" }
		]);

	}

}