namespace Hephaestus.Backend.Database {

	public class ActiveTable : IEntityTypeConfiguration<Active> {

		public void Configure(EntityTypeBuilder<Active> builder) {

			// Table Name
			builder.ToTable("Active");

			// Primary Key
			builder.HasKey(x => x.Id);
			builder.Property(x => x.Id).ValueGeneratedNever();

			// Data Seed
			builder.HasData(
				new Hidden { Id = true, Name = "Yes", Name_pt = "Sim", Name_en = "Yes", Name_es = "Sí" },
				new Hidden { Id = false, Name = "No", Name_pt = "Não", Name_en = "No", Name_es = "No" }
			);

		}

	}

}