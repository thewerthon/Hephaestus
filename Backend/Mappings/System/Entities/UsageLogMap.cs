namespace Hephaestus.Backend.Mappings;

public class UsageLogMap : IEntityTypeConfiguration<UsageLog> {

	public void Configure(EntityTypeBuilder<UsageLog> builder) {

		// Table Name
		builder.ToTable("UsageLogs");

		// Primary Key
		builder.HasKey(x => x.Id);
		builder.Property(x => x.Id).ValueGeneratedOnAdd().UseIdentityColumn();

		// Relationships
		builder.HasOne(x => x.UserData).WithMany().HasForeignKey(x => x.User).OnDelete(DeleteBehavior.Restrict);

	}

}