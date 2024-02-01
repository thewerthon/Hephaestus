using Hephaestus.Architect.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Hephaestus.Backend.Mappings {

	public class UserInfoMapping : IEntityTypeConfiguration<UserInfo> {

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
			builder.Property(x => x.Active).HasDefaultValue(true);

		}

	}

}