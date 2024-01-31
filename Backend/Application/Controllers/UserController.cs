using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Architect.Application.Models;
using Backend.Database;

namespace Backend.Application.Controllers {

	public class UserController(DatabaseContext Database) : BaseController(Database) {

		// GET: api/user/{id}
		[HttpGet("{id}", Name = "GetUser")]
		public async Task<ActionResult<UserInfo>> GetUser(int id) {

			var user = await Database.Users.FindAsync(id);
			if (user == null) return NotFound();
			return user;

		}

		// POST: api/user
		[HttpPost("{id}", Name = "PostUser")]
		public async Task<ActionResult<UserInfo>> PostUser(int id, UserInfo data) {

			if (id != data.ID) return BadRequest();

			var user = await Database.Users.FindAsync(id);
			if (user == null) return NotFound();

			user = data;

			Database.Users.Update(user);
			await Database.SaveChangesAsync();
			return user;

		}

		// DELETE: api/user/{id}
		[HttpDelete("{id}", Name = "DeleteUser")]
		public async Task<IActionResult> DeleteUser(int id) {

			var user = await Database.Users.FindAsync(id);
			if (user == null) return NotFound();

			Database.Users.Remove(user);
			await Database.SaveChangesAsync();
			return NoContent();

		}

	}

}