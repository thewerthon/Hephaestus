namespace Hephaestus.Backend.Application.Mappings;

public class TestMapping : IEntityTypeConfiguration<Test> {

	public void Configure(EntityTypeBuilder<Test> builder) {

		// Table Name
		builder.ToTable("Tests");

		// Primary Key
		builder.HasKey(x => x.Id);
		builder.Property(x => x.Id).ValueGeneratedOnAdd().UseIdentityColumn();

		// Tracing Relationships
		builder.HasOne(x => x.CreatedByData).WithMany().HasForeignKey(x => x.CreatedBy).OnDelete(DeleteBehavior.Restrict);
		builder.HasOne(x => x.UpdatedByData).WithMany().HasForeignKey(x => x.UpdatedBy).OnDelete(DeleteBehavior.Restrict);

		// Data Seed
		builder.HasData([

			new Test {
				Id = 1,
				Name = "Test 1",
				CreatedBy = 1,
				CreatedOn = DateTime.UtcNow,
				UpdatedBy = 1,
				UpdatedOn = DateTime.UtcNow
			},

			new Test {
				Id = 2,
				Name = "Test 2",
				CreatedBy = 1,
				CreatedOn = DateTime.UtcNow,
				UpdatedBy = 1,
				UpdatedOn = DateTime.UtcNow
			},

			new Test {
				Id = 3,
				Name = "Test 3",
				CreatedBy = 1,
				CreatedOn = DateTime.UtcNow,
				UpdatedBy = 1,
				UpdatedOn = DateTime.UtcNow
			},

		]);

	}

}