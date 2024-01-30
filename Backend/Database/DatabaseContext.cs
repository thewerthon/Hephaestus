using Microsoft.EntityFrameworkCore;
using Architect.Application.Models;

namespace Backend.Database {

	public class DatabaseContext(DbContextOptions<DatabaseContext> options) : DbContext(options) {

		public DbSet<UserInfo> Users { get; set; }

	}

}