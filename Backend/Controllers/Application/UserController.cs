using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Hephaestus.Backend.Databases;
using Hephaestus.Architect.Models;
using System;
using static System.Runtime.InteropServices.JavaScript.JSType;

namespace Backend.Controllers.Application {

	[ApiController]
	[Route("api/user")]
	public class UserController : ControllerBase {

		private static async Task<bool> ExistsAsync(DatabaseContext dbContext, User data) {

			return await dbContext.Users.AsNoTracking().AnyAsync(x => x.Guid == data.Guid || x.Email == data.Email);

		}

		private static async Task<User?> FetchAsync(DatabaseContext dbContext, bool tracking, int id) {

			return tracking
				? await dbContext.Users.FirstOrDefaultAsync(x => x.Id == id)
				: await dbContext.Users.AsNoTracking().FirstOrDefaultAsync(x => x.Id == id);

		}

		private static async Task<User?> FetchAsync(DatabaseContext dbContext, bool tracking, string guid) {

			return tracking
				? await dbContext.Users.FirstOrDefaultAsync(x => x.Guid == guid)
				: await dbContext.Users.AsNoTracking().FirstOrDefaultAsync(x => x.Guid == guid);

		}

		// POST: /api/user
		[HttpPost("", Name = "PostUser")]
		public async Task<IActionResult> PostAsync([FromServices] DatabaseContext dbContext, [FromBody] User data) {

			if (await ExistsAsync(dbContext, data)) return BadRequest("Duplicated Guid or Email.");

			try {

				await dbContext.Users.AddAsync(data);
				await dbContext.SaveChangesAsync();
				return CreatedAtRoute("GetUser", new { id = data.Id }, data);

			} catch (Exception e) {

				return BadRequest(e);

			}

		}

		// GET: /api/user/id
		[HttpGet("{id}", Name = "GetUser")]
		public async Task<IActionResult> GetAsync([FromServices] DatabaseContext dbContext, [FromRoute] int id) {

			var user = await FetchAsync(dbContext, false, id);
			return user == null ? NotFound("Id not found.") : Ok(user);

		}

		// PUT: /api/user/id
		[HttpPut("{id}", Name = "PutUser")]
		public async Task<IActionResult> PutAsync([FromServices] DatabaseContext dbContext, [FromRoute] int id, [FromBody] User data) {

			var user = await FetchAsync(dbContext, true, id);
			if (user == null) return NotFound("Id not found.");

			try {

				dbContext.Entry(user).CurrentValues.SetValues(data);
				dbContext.Users.Update(user!);
				await dbContext.SaveChangesAsync();
				return Ok(user);

			} catch (Exception e) {

				return BadRequest(e);

			}

		}

		// DELETE: /api/user/id
		[HttpDelete("{id}", Name = "DeleteUser")]
		public async Task<IActionResult> DeleteAsync([FromServices] DatabaseContext dbContext, [FromRoute] int id) {

			var user = await FetchAsync(dbContext, true, id);
			if (user == null) return NotFound("Id not found.");

			try {

				dbContext.Users.Remove(user);
				await dbContext.SaveChangesAsync();
				return Ok();

			} catch (Exception e) {

				return BadRequest(e);

			}

		}

		// GET: /api/user/guid/guid
		[HttpGet("guid/{guid}", Name = "GetUserByGuid")]
		public async Task<IActionResult> GetByGuidAsync([FromServices] DatabaseContext dbContext, [FromRoute] string guid) {

			var user = await FetchAsync(dbContext, false, guid);
			return user == null ? NotFound("Guid not found.") : Ok(user);

		}

		// PUT: /api/user/guid/guid
		[HttpPut("guid/{guid}", Name = "PutUserByGuid")]
		public async Task<IActionResult> PutAsync([FromServices] DatabaseContext dbContext, [FromRoute] string guid, [FromBody] User data) {

			var user = await FetchAsync(dbContext, true, guid);
			if (user == null) return NotFound("Guid not found.");

			try {

				dbContext.Entry(user).CurrentValues.SetValues(data);
				dbContext.Users.Update(user);
				await dbContext.SaveChangesAsync();
				return Ok(user);

			} catch (Exception e) {

				return BadRequest(e);

			}

		}

		// GET: /api/user/list
		[HttpGet("list", Name = "GetUsers")]
		public async Task<IActionResult> GetAsync([FromServices] DatabaseContext dbContext) {

			var users = await dbContext.Users.AsNoTracking().ToListAsync();
			return Ok(users);

		}

	}

}