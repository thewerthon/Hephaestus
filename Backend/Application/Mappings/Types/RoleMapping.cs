namespace Hephaestus.Backend.Application.Mappings;

public class RoleMapping : IEntityTypeConfiguration<Role> {

	public void Configure(EntityTypeBuilder<Role> builder) {

		// Table Name
		builder.ToTable("Roles");

		// Primary Key
		builder.HasKey(x => x.Key);
		builder.Property(x => x.Key).HasMaxLength(32).IsUnicode(false).ValueGeneratedNever();

		// Data Seed
		builder.HasData(Role.Seed);

	}

}