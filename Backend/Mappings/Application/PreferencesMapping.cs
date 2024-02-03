using Hephaestus.Architect.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Hephaestus.Backend.Mappings {

	public class PreferencesMapping : IEntityTypeConfiguration<Preferences> {

		public void Configure(EntityTypeBuilder<Preferences> builder) {

			// Table Name
			builder.ToTable("Preferences");

			// Primary Key
			builder.HasKey(x => x.Id);
			builder.Property(x => x.Id).ValueGeneratedOnAdd().UseIdentityColumn();

			// Relationships
			builder.HasOne(x => x.User).WithOne(x => x.Preferences).HasForeignKey<Preferences>(x => x.UserId).OnDelete(DeleteBehavior.Cascade);

		}

	}

}