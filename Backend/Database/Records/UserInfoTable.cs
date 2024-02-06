namespace Hephaestus.Backend.Database {

	public class UserInfoTable : IEntityTypeConfiguration<UserInfo> {

		public void Configure(EntityTypeBuilder<UserInfo> builder) {

			// Table Name
			builder.ToTable("Users");

			// Primary Key
			builder.HasKey(x => x.Id);
			builder.Property(x => x.Id).ValueGeneratedOnAdd().UseIdentityColumn();

			// Indexes Configuration
			builder.HasIndex(x => x.Guid);
			builder.HasIndex(x => x.Email);

			// Default Values
			builder.Property(x => x.Hidden).HasDefaultValue(false);
			builder.Property(x => x.Active).HasDefaultValue(true);

			// Relationships
			builder.HasOne(x => x.RoleData).WithMany().HasForeignKey(x => x.Role);
			builder.HasOne(x => x.HiddenData).WithMany().HasForeignKey(x => x.Hidden);
			builder.HasOne(x => x.ActiveData).WithMany().HasForeignKey(x => x.Active);

		}

	}

}