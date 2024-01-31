using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Hephaestus.Backend.Databases;
using Hephaestus.Architect.Models;

namespace Backend.Controllers.Application {

	[ApiController]
	[Route("api/User")]
	public class UserController : ControllerBase {

		// POST: api/User
		[HttpPost("", Name = "PostUser")]
		public async Task<IActionResult> PostAsync([FromServices] DatabaseContext dbContext, [FromBody] User data) {

			if (!ModelState.IsValid) return BadRequest();

			try {

				await dbContext.Users.AddAsync(data);
				await dbContext.SaveChangesAsync();
				return CreatedAtRoute("GetUser", new { id = data.Id }, data);

			} catch (Exception e) {

				return BadRequest(e);

			}

		}

		// GET: api/User/id
		[HttpGet("{id}", Name = "GetUser")]
		public async Task<IActionResult> GetAsync([FromServices] DatabaseContext dbContext, [FromRoute] int id) {

			var user = await dbContext.Users.AsNoTracking().SingleAsync(x => x.Id == id);
			return user == null ? NotFound() : Ok(user);

		}

		// PUT: api/User/id
		[HttpPut("{id}", Name = "PutUser")]
		public async Task<IActionResult> PutAsync([FromServices] DatabaseContext dbContext, [FromRoute] int id, [FromBody] User data) {

			if (!ModelState.IsValid) return BadRequest();
			var user = await dbContext.Users.FirstOrDefaultAsync(x => x.Id == id);
			if (user == null) return NotFound();

			try {

				user = data;
				dbContext.Users.Update(user);
				await dbContext.SaveChangesAsync();
				return Ok(user);

			} catch (Exception e) {

				return BadRequest(e);

			}

		}

		// DELETE: api/User/id
		[HttpDelete("{id}", Name = "DeleteUser")]
		public async Task<IActionResult> DeleteAsync([FromServices] DatabaseContext dbContext, [FromRoute] int id) {

			var user = await dbContext.Users.SingleAsync(x => x.Id == id);
			if (user == null) return NotFound();

			try {

				dbContext.Users.Remove(user);
				await dbContext.SaveChangesAsync();
				return Ok();

			} catch (Exception e) {

				return BadRequest(e);

			}

		}

	}

	[ApiController]
	[Route("api/Users")]
	public class UsersController : ControllerBase {

		// GET: api/Users
		[HttpGet("", Name = "GetUsers")]
		public async Task<IActionResult> GetAsync([FromServices] DatabaseContext dbContext) {

			var users = await dbContext.Users.AsNoTracking().ToListAsync();
			return Ok(users);

		}

	}

}