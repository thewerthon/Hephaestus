namespace Hephaestus.Backend.Database {

	public class UserTable : IEntityTypeConfiguration<User> {

		public void Configure(EntityTypeBuilder<User> builder) {

			// Table Name
			builder.ToTable("Users");

			// Primary Key
			builder.HasKey(x => x.Id);
			builder.Property(x => x.Id).ValueGeneratedOnAdd().UseIdentityColumn();

			// Indexes Configuration
			builder.HasIndex(x => x.Guid).IsUnique();
			builder.HasIndex(x => x.Email).IsUnique();

			// Default Values
			builder.Property(x => x.Hidden).HasDefaultValue(false);
			builder.Property(x => x.Active).HasDefaultValue(true);

			// Relationships
			builder.HasOne(x => x.RoleData).WithMany().HasForeignKey(x => x.Role);
			builder.HasOne(x => x.HiddenData).WithMany().HasForeignKey(x => x.Hidden);
			builder.HasOne(x => x.ActiveData).WithMany().HasForeignKey(x => x.Active);

			// Tracing Relationships
			builder.HasOne(x => x.CreatedByData).WithMany().HasForeignKey(x => x.CreatedBy);
			builder.HasOne(x => x.UpdatedByData).WithMany().HasForeignKey(x => x.UpdatedBy);
			builder.HasOne(x => x.DeletedByData).WithMany().HasForeignKey(x => x.DeletedBy);

			// Data Seed
			builder.HasData(

				new User {
					Id = 1,
					Guid = "00000000-0000-0000-0000-000000000000",
					Name = "Sistema",
					Email = "system@siw.ind.br",
					Photo = "images/users/unknown.jpg",
					Role = "System.Admin",
					Hidden = true,
					Active = true
				},

				new User {
					Id = 2,
					Guid = "8c4e35a5-2f64-4c28-8644-672f037272c5",
					Name = "Autobot",
					Email = "autobot@siw.ind.br",
					Photo = "images/users/unknown.jpg",
					Role = "System.Admin",
					Hidden = true,
					Active = true
				}

			);

		}

	}

}