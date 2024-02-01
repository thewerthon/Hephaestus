﻿// <auto-generated />
using Hephaestus.Backend.Databases;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

#nullable disable

namespace Backend.Migrations
{
    [DbContext(typeof(DatabaseContext))]
    partial class DatabaseContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "8.0.1")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder);

            modelBuilder.Entity("Hephaestus.Architect.Models.Preferences", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("Relational:JsonPropertyName", "id");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<string>("Guid")
                        .IsRequired()
                        .HasMaxLength(36)
                        .HasColumnType("nvarchar(36)")
                        .HasAnnotation("Relational:JsonPropertyName", "guid");

                    b.Property<string>("Language")
                        .HasMaxLength(8)
                        .HasColumnType("nvarchar(8)")
                        .HasAnnotation("Relational:JsonPropertyName", "language");

                    b.Property<string>("Theme")
                        .HasMaxLength(8)
                        .HasColumnType("nvarchar(8)")
                        .HasAnnotation("Relational:JsonPropertyName", "theme");

                    b.HasKey("Id");

                    b.HasIndex("Guid")
                        .IsUnique();

                    b.ToTable("Preferences", (string)null);
                });

            modelBuilder.Entity("Hephaestus.Architect.Models.User", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("Relational:JsonPropertyName", "uid");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<string>("Email")
                        .IsRequired()
                        .HasMaxLength(64)
                        .HasColumnType("nvarchar(64)")
                        .HasAnnotation("Relational:JsonPropertyName", "mail");

                    b.Property<string>("FirstName")
                        .HasMaxLength(32)
                        .HasColumnType("nvarchar(32)")
                        .HasAnnotation("Relational:JsonPropertyName", "givenName");

                    b.Property<string>("Guid")
                        .IsRequired()
                        .HasMaxLength(36)
                        .HasColumnType("nvarchar(36)")
                        .HasAnnotation("Relational:JsonPropertyName", "id");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasMaxLength(64)
                        .HasColumnType("nvarchar(64)")
                        .HasAnnotation("Relational:JsonPropertyName", "displayName");

                    b.Property<string>("Office")
                        .HasMaxLength(64)
                        .HasColumnType("nvarchar(64)")
                        .HasAnnotation("Relational:JsonPropertyName", "officeLocation");

                    b.Property<string>("Photo")
                        .HasColumnType("nvarchar(max)")
                        .HasAnnotation("Relational:JsonPropertyName", "photo");

                    b.Property<string>("Role")
                        .HasMaxLength(32)
                        .HasColumnType("nvarchar(32)")
                        .HasAnnotation("Relational:JsonPropertyName", "role");

                    b.Property<string>("SecondName")
                        .HasMaxLength(32)
                        .HasColumnType("nvarchar(32)")
                        .HasAnnotation("Relational:JsonPropertyName", "surname");

                    b.Property<string>("Title")
                        .HasMaxLength(64)
                        .HasColumnType("nvarchar(64)")
                        .HasAnnotation("Relational:JsonPropertyName", "jobTitle");

                    b.HasKey("Id");

                    b.HasIndex("Email")
                        .IsUnique();

                    b.HasIndex("Guid")
                        .IsUnique();

                    b.ToTable("Users", (string)null);
                });

            modelBuilder.Entity("Hephaestus.Architect.Models.Version", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("Relational:JsonPropertyName", "uid");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<int>("Build")
                        .HasColumnType("int")
                        .HasAnnotation("Relational:JsonPropertyName", "build");

                    b.Property<int>("Force")
                        .HasColumnType("int")
                        .HasAnnotation("Relational:JsonPropertyName", "force");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasMaxLength(32)
                        .HasColumnType("nvarchar(32)")
                        .HasAnnotation("Relational:JsonPropertyName", "name");

                    b.Property<string>("Notes")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)")
                        .HasAnnotation("Relational:JsonPropertyName", "notes");

                    b.HasKey("Id");

                    b.HasIndex("Build")
                        .IsUnique();

                    b.ToTable("Versions", (string)null);
                });
#pragma warning restore 612, 618
        }
    }
}
