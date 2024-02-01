using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Version = Hephaestus.Architect.Models.Version;

namespace Hephaestus.Backend.Mappings {

	public class VersionMapping : IEntityTypeConfiguration<Version> {

		public void Configure(EntityTypeBuilder<Version> builder) {

			// Table Name
			builder.ToTable("Versions");

			// Primary Key
			builder.HasKey(x => x.Id);
			builder.Property(x => x.Id).ValueGeneratedOnAdd().UseIdentityColumn();

			// Indexes Configuration
			builder.HasIndex(x => x.Build).IsUnique();

		}

	}

}