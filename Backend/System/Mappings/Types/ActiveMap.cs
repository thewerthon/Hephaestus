namespace Hephaestus.Backend.Application.Mappings;

public class ActiveMap : IEntityTypeConfiguration<Active> {

	public void Configure(EntityTypeBuilder<Active> builder) {

		// Table Name
		builder.ToTable("Active");

		// Primary Key
		builder.HasKey(x => x.Key);
		builder.Property(x => x.Key).ValueGeneratedNever();

		// Data Seed
		builder.HasData([
			new Active { Key = true,  Value = "Sim", Value_en = "Yes", Value_es = "Sí" },
			new Active { Key = false, Value = "Não", Value_en = "No",  Value_es = "No" }
		]);

	}

}