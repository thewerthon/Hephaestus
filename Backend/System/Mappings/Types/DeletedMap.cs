namespace Hephaestus.Backend.Application.Mappings;

public class DeletedMap : IEntityTypeConfiguration<Deleted> {

	public void Configure(EntityTypeBuilder<Deleted> builder) {

		// Table Name
		builder.ToTable("Deleted");

		// Primary Key
		builder.HasKey(x => x.Key);
		builder.Property(x => x.Key).ValueGeneratedNever();

		// Data Seed
		builder.HasData([
			new Deleted { Key = true,  Value = "Sim", Value_en = "Yes", Value_es = "Sí" },
			new Deleted { Key = false, Value = "Não", Value_en = "No",  Value_es = "No" }
		]);

	}

}