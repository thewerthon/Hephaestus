using Architect.Application.Models;
using Microsoft.EntityFrameworkCore;

namespace Backend.Application.Database {

	public class DatabaseContext(DbContextOptions<DatabaseContext> options) : DbContext(options) {

		public DbSet<UserInfo> UsersInfo { get; set; }

	}

}