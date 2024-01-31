using Microsoft.EntityFrameworkCore;
using Hephaestus.Architect.Models;

namespace Hephaestus.Backend.Databases {

	public class DatabaseContext(DbContextOptions<DatabaseContext> options) : DbContext(options) {

		public DbSet<User> Users { get; set; }

	}

}