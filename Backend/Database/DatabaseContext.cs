using Hephaestus.Architect.Models;
using Hephaestus.Backend.Mappings;
using Microsoft.EntityFrameworkCore;
using Version = Hephaestus.Architect.Models.Version;

namespace Hephaestus.Backend.Database {

	public class DatabaseContext(DbContextOptions<DatabaseContext> options) : DbContext(options) {

		// Application Tables
		public DbSet<Version> Versions { get; set; }
		public DbSet<UserInfo> UserInfos { get; set; }
		public DbSet<Preferences> Preferences { get; set; }

		protected override void OnModelCreating(ModelBuilder builder) {

			// Application Mappings
			builder.ApplyConfiguration(new VersionMapping());
			builder.ApplyConfiguration(new UserInfoMapping());
			builder.ApplyConfiguration(new PreferencesMapping());

		}

	}

}