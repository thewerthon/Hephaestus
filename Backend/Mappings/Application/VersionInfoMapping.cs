using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using VersionInfo = Hephaestus.Architect.Models.VersionInfo;

namespace Hephaestus.Backend.Mappings {

	public class VersionInfoMapping : IEntityTypeConfiguration<VersionInfo> {

		public void Configure(EntityTypeBuilder<VersionInfo> builder) {

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