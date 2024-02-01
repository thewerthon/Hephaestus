using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Hephaestus.Backend.Databases;
using Hephaestus.Architect.Models;

namespace Backend.Controllers.Application {

	[ApiController]
	[Route("api/preferences")]
	public class PreferencesController : ControllerBase {

		// POST: /api/preferences
		[HttpPost("", Name = "PostPreferences")]
		public async Task<IActionResult> PostAsync([FromServices] DatabaseContext dbContext, [FromBody] Preferences data) {

			if (!ModelState.IsValid) return BadRequest();

			try {

				await dbContext.Preferences.AddAsync(data);
				await dbContext.SaveChangesAsync();
				return CreatedAtRoute("GetPreferences", new { id = data.Id }, data);

			} catch (Exception e) {

				return BadRequest(e);

			}

		}

		// GET: /api/preferences/id
		[HttpGet("{id}", Name = "GetPreferences")]
		public async Task<IActionResult> GetAsync([FromServices] DatabaseContext dbContext, [FromRoute] int id) {

			var preferences = await dbContext.Preferences.AsNoTracking().SingleAsync(x => x.Id == id);
			return preferences == null ? NotFound() : Ok(preferences);

		}

		// GET: /api/preferences/guid/guid
		[HttpGet("guid/{guid}", Name = "GetPreferencesByGuid")]
		public async Task<IActionResult> GetByGuidAsync([FromServices] DatabaseContext dbContext, [FromRoute] string guid) {

			var preferences = await dbContext.Preferences.AsNoTracking().SingleAsync(x => x.Guid == guid);
			return preferences == null ? NotFound() : Ok(preferences);

		}

		// PUT: /api/preferences/id
		[HttpPut("{id}", Name = "PutPreferences")]
		public async Task<IActionResult> PutAsync([FromServices] DatabaseContext dbContext, [FromRoute] int id, [FromBody] Preferences data) {

			if (!ModelState.IsValid) return BadRequest();
			var preferences = await dbContext.Preferences.FirstOrDefaultAsync(x => x.Id == id);
			if (preferences == null) return NotFound();

			try {

				preferences = data;
				dbContext.Preferences.Update(preferences);
				await dbContext.SaveChangesAsync();
				return Ok(preferences);

			} catch (Exception e) {

				return BadRequest(e);

			}

		}

		// PUT: /api/preferences/guid/guid
		[HttpPut("guid/{guid}", Name = "PutPreferencesByGuid")]
		public async Task<IActionResult> PutAsync([FromServices] DatabaseContext dbContext, [FromRoute] string guid, [FromBody] Preferences data) {

			if (!ModelState.IsValid) return BadRequest();
			var preferences = await dbContext.Preferences.FirstOrDefaultAsync(x => x.Guid == guid);
			if (preferences == null) return NotFound();

			try {

				preferences = data;
				dbContext.Preferences.Update(preferences);
				await dbContext.SaveChangesAsync();
				return Ok(preferences);

			} catch (Exception e) {

				return BadRequest(e);

			}

		}

		// DELETE: /api/preferences/id
		[HttpDelete("{id}", Name = "DeletePreferences")]
		public async Task<IActionResult> DeleteAsync([FromServices] DatabaseContext dbContext, [FromRoute] int id) {

			var preferences = await dbContext.Preferences.SingleAsync(x => x.Id == id);
			if (preferences == null) return NotFound();

			try {

				dbContext.Preferences.Remove(preferences);
				await dbContext.SaveChangesAsync();
				return Ok();

			} catch (Exception e) {

				return BadRequest(e);

			}

		}

	}

}