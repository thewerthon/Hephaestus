namespace Hephaestus.Backend.Application.Mappings;

public class UserMap : IEntityTypeConfiguration<User> {

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
		builder.Property(x => x.Active).HasDefaultValue(true);

		// Relationships
		builder.HasOne(x => x.RoleData).WithMany().HasForeignKey(x => x.Role);
		builder.HasOne(x => x.ActiveData).WithMany().HasForeignKey(x => x.Active);

		// Tracing Relationships
		builder.HasOne(x => x.CreatedByData).WithMany().HasForeignKey(x => x.CreatedBy);
		builder.HasOne(x => x.UpdatedByData).WithMany().HasForeignKey(x => x.UpdatedBy);
		builder.HasOne(x => x.DeletedByData).WithMany().HasForeignKey(x => x.DeletedBy);

		// Data Seed
		builder.HasData([

			new User {
				Id = 1,
				Guid = "00000000-0000-0000-0000-000000000000",
				Name = "Sistema",
				Email = "sistema@siw.ind.br",
				Photo = "images/users/unknown.jpg",
				Role = "System.Admin",
				Active = true,
				CreatedBy = 1,
				CreatedOn = DateTime.Now,
				UpdatedBy = 1,
				UpdatedOn = DateTime.Now
			},

			new User {
				Id = 2,
				Guid = "00000000-0000-0000-0000-000000000001",
				Name = "Usuário do Portal",
				Email = "usuario-portal@siw.ind.br",
				Photo = "images/users/unknown.jpg",
				Role = "System.User",
				Active = true,
				CreatedBy = 1,
				CreatedOn = DateTime.Now,
				UpdatedBy = 1,
				UpdatedOn = DateTime.Now
			},

			new User {
				Id = 3,
				Guid = "00000000-0000-0000-0000-000000000002",
				Name = "Usuário Externo",
				Email = "usuario-externo@siw.ind.br",
				Photo = "images/users/unknown.jpg",
				Role = "System.User",
				Active = true,
				CreatedBy = 1,
				CreatedOn = DateTime.Now,
				UpdatedBy = 1,
				UpdatedOn = DateTime.Now
			},

			new User {
				Id = 4,
				Guid = "8c4e35a5-2f64-4c28-8644-672f037272c5",
				Name = "Autobot",
				Email = "autobot@siw.ind.br",
				Photo = "images/users/unknown.jpg",
				Role = "System.Admin",
				Active = true,
				CreatedBy = 1,
				CreatedOn = DateTime.Now,
				UpdatedBy = 1,
				UpdatedOn = DateTime.Now
			}

		]);

	}

}