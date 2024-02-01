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

			// Indexes Configuration
			builder.HasIndex(x => x.Guid).IsUnique();

		}

	}

}