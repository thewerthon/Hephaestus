using Hephaestus.Architect.Models;
using Hephaestus.Backend.Mappings;
using Microsoft.EntityFrameworkCore;

namespace Hephaestus.Backend.Database {

	public class DatabaseContext(DbContextOptions<DatabaseContext> options) : DbContext(options) {

		// Application Tables
		public DbSet<AppVersion> Versions { get; set; }
		public DbSet<UserInfo> UserInfos { get; set; }
		public DbSet<Preferences> Preferences { get; set; }

		// Application Mappings
		protected override void OnModelCreating(ModelBuilder builder) {

			builder.ApplyConfiguration(new AppVersionMapping());
			builder.ApplyConfiguration(new UserInfoMapping());
			builder.ApplyConfiguration(new PreferencesMapping());

		}

	}

}