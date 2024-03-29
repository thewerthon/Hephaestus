﻿namespace Hephaestus.Backend.Application.Mappings;

public class YesNoMapping : IEntityTypeConfiguration<YesNo> {

	public void Configure(EntityTypeBuilder<YesNo> builder) {

		// Table Name
		builder.ToTable("YesNo");

		// Primary Key
		builder.HasKey(x => x.Key);
		builder.Property(x => x.Key).ValueGeneratedNever();

		// Data Seed
		builder.HasData(YesNo.Seed);

	}

}