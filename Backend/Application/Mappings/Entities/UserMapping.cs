namespace Hephaestus.Backend.Application.Mappings;

public class UserMapping : IEntityTypeConfiguration<User> {

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
		builder.HasOne(x => x.RoleData).WithMany().HasForeignKey(x => x.Role).OnDelete(DeleteBehavior.NoAction);
		builder.HasOne(x => x.HiddenData).WithMany().HasForeignKey(x => x.Hidden).OnDelete(DeleteBehavior.NoAction);
		builder.HasOne(x => x.ActiveData).WithMany().HasForeignKey(x => x.Active).OnDelete(DeleteBehavior.NoAction);

		// Tracing Relationships
		builder.HasOne(x => x.CreatedByData).WithMany().HasForeignKey(x => x.CreatedBy).OnDelete(DeleteBehavior.Restrict);
		builder.HasOne(x => x.UpdatedByData).WithMany().HasForeignKey(x => x.UpdatedBy).OnDelete(DeleteBehavior.Restrict);

		// Tracing Formats
		builder.Property(x => x.CreatedOn).HasColumnType("datetimeoffset(0)");
		builder.Property(x => x.UpdatedOn).HasColumnType("datetimeoffset(0)");

		// Data Seed
		builder.HasData([

			new User {
				Id = 1,
				Guid = "00000000-0000-0000-0000-000000000000",
				Name = "Sistema",
				Name_en = "System",
				Name_es = "Sistema",
				Email = "sistema@siw.ind.br",
				Photo = "images/users/unknown.jpg",
				Role = "System.Admin",
				Hidden = true,
				Active = true,
				CreatedBy = 1,
				CreatedOn = DateTimeOffset.UtcNow,
				UpdatedBy = 1,
				UpdatedOn = DateTimeOffset.UtcNow
			},

			new User {
				Id = 2,
				Guid = "00000000-0000-0000-0000-000000000001",
				Name = "Usuário do Portal",
				Name_en = "Portal User",
				Name_es = "Usuario del Portal",
				Email = "usuario-portal@siw.ind.br",
				Photo = "images/users/unknown.jpg",
				Role = "System.User",
				Hidden = true,
				Active = true,
				CreatedBy = 1,
				CreatedOn = DateTimeOffset.UtcNow,
				UpdatedBy = 1,
				UpdatedOn = DateTimeOffset.UtcNow
			},

			new User {
				Id = 3,
				Guid = "00000000-0000-0000-0000-000000000002",
				Name = "Usuário Externo",
				Name_en = "External User",
				Name_es = "Usuario Externo",
				Email = "usuario-externo@siw.ind.br",
				Photo = "images/users/unknown.jpg",
				Role = "System.User",
				Hidden = true,
				Active = true,
				CreatedBy = 1,
				CreatedOn = DateTimeOffset.UtcNow,
				UpdatedBy = 1,
				UpdatedOn = DateTimeOffset.UtcNow
			},

			new User {
				Id = 4,
				Guid = "8c4e35a5-2f64-4c28-8644-672f037272c5",
				Name = "Autobot",
				Name_en = "Autobot",
				Name_es = "Autobot",
				Email = "autobot@siw.ind.br",
				Photo = "images/users/unknown.jpg",
				Role = "System.Admin",
				Hidden = true,
				Active = true,
				CreatedBy = 1,
				CreatedOn = DateTimeOffset.UtcNow,
				UpdatedBy = 1,
				UpdatedOn = DateTimeOffset.UtcNow
			}

		]);

	}

}