namespace Hephaestus.Backend.Mappings;

public class TestMap : IEntityTypeConfiguration<Test> {

	public void Configure(EntityTypeBuilder<Test> builder) {

		// Table Name
		builder.ToTable("Tests");

		// Primary Key
		builder.HasKey(x => x.Id);
		builder.Property(x => x.Id).ValueGeneratedOnAdd().UseIdentityColumn();

		// Default Values
		builder.Property(x => x.Deleted).HasDefaultValue(false);

		// Relationships
		builder.HasOne(x => x.DeletedData).WithMany().HasForeignKey(x => x.Deleted).OnDelete(DeleteBehavior.NoAction);

		// Tracing Relationships
		builder.HasOne(x => x.CreatedByData).WithMany().HasForeignKey(x => x.CreatedBy).OnDelete(DeleteBehavior.Restrict);
		builder.HasOne(x => x.UpdatedByData).WithMany().HasForeignKey(x => x.UpdatedBy).OnDelete(DeleteBehavior.Restrict);
		builder.HasOne(x => x.CreatedByData).WithMany().HasForeignKey(x => x.CreatedBy).OnDelete(DeleteBehavior.Restrict);

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