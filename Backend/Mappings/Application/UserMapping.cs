using Hephaestus.Architect.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Hephaestus.Backend.Mappings {

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

		}

	}

}