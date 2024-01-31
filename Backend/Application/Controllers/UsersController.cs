using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Architect.Application.Models;
using Backend.Database;

namespace Backend.Application.Controllers {

	public class UsersController(DatabaseContext Database) : BaseController(Database) {

		// GET: api/users
		[HttpGet(Name = "GetUsers")]
		public async Task<ActionResult<IEnumerable<UserInfo>>> GetUsers() {

			return await Database.Users.AsNoTracking().ToListAsync();

		}

	}

}