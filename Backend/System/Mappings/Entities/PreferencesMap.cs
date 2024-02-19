﻿namespace Hephaestus.Backend.Application.Mappings;

public class PreferencesMap : IEntityTypeConfiguration<Preferences> {

	public void Configure(EntityTypeBuilder<Preferences> builder) {

		// Table Name
		builder.ToTable("Preferences");

		// Primary Key
		builder.HasKey(x => x.Id);
		builder.Property(x => x.Id).ValueGeneratedOnAdd().UseIdentityColumn();

		// Relationships
		builder.HasOne(x => x.ThemeData).WithMany().HasForeignKey(x => x.Theme);
		builder.HasOne(x => x.LanguageData).WithMany().HasForeignKey(x => x.Language);
		builder.HasOne(x => x.UserData).WithOne(x => x.Preferences).HasForeignKey<Preferences>(x => x.User).OnDelete(DeleteBehavior.Cascade);

		// Data Seed
		builder.HasData([
			new Preferences { Id = 1, User = 1, Theme = "auto", Language = "pt" },
			new Preferences { Id = 2, User = 2, Theme = "auto", Language = "pt" }
		]);

	}

}