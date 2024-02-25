namespace Hephaestus.Backend.Mappings;

public class TestMap : IEntityTypeConfiguration<Test> {

	public void Configure(EntityTypeBuilder<Test> builder) {

		// Table Name
		builder.ToTable("Tests");

		// Primary Key
		builder.HasKey(x => x.Id);
		builder.Property(x => x.Id).ValueGeneratedOnAdd().UseIdentityColumn();

		// Tracing Relationships
		builder.HasOne(x => x.CreatedByData).WithMany().HasForeignKey(x => x.CreatedBy).OnDelete(DeleteBehavior.Restrict);
		builder.HasOne(x => x.UpdatedByData).WithMany().HasForeignKey(x => x.UpdatedBy).OnDelete(DeleteBehavior.Restrict);
		builder.HasOne(x => x.CreatedByData).WithMany().HasForeignKey(x => x.CreatedBy).OnDelete(DeleteBehavior.Restrict);

	}

}