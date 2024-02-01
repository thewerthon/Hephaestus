using Hephaestus.Architect.Models;
using Hephaestus.Backend.Mappings;
using Microsoft.EntityFrameworkCore;
using Version = Hephaestus.Architect.Models.Version;

namespace Hephaestus.Backend.Databases {

	public class DatabaseContext(DbContextOptions<DatabaseContext> options) : DbContext(options) {

		// Application Tables
		public DbSet<User> Users { get; set; }
		public DbSet<Version> Versions { get; set; }
		public DbSet<Preferences> Preferences { get; set; }

		protected override void OnModelCreating(ModelBuilder modelBuilder) {

			// Application Mappings
			modelBuilder.ApplyConfiguration(new UserMapping());
			modelBuilder.ApplyConfiguration(new VersionMapping());
			modelBuilder.ApplyConfiguration(new PreferencesMapping());

		}

	}

}