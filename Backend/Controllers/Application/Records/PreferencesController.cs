using Microsoft.AspNetCore.OData.Query;
using Microsoft.AspNetCore.OData.Results;

namespace Hephaestus.Backend.Controllers {

	public class PreferencesController(DatabaseContext context) : RecordsController<Preferences>(context) {

		// GET By User
		[HttpGet("odata/Preferences/{user:int}")]
		[EnableQuery(AllowedQueryOptions = SingleItemQueryOptions, MaxExpansionDepth = 5, MaxAnyAllExpressionDepth = 5)]
		public ActionResult<SingleResult<User>> GetByUser(int user) {

			try {

				if (user < 0) user = 0;
				var record = DbSet.AsNoTracking().Where(i => i.User == user);
				return Ok(SingleResult.Create(record));

			} catch (Exception ex) {

				HandleException(ex);
				return BadRequest(ModelState);

			}

		}

		// PUT By User
		[HttpPut("odata/Preferences/{user:int}")]
		public async Task<ActionResult> PutByUserAsync(int user, [FromBody] Preferences item) {

			try {

				if (user < 0) user = 0;
				if (item == null) return BadRequest("Invalid data.");
				if (!ModelState.IsValid) return BadRequest(ModelState);

				var record = await DbSet.AsNoTracking().FirstOrDefaultAsync(i => i.User == user);

				if (record == null) {

					var (success, message) = OnCreate(ref item, user);
					if (!success) return BadRequest(message);

					item.Id = 0;
					DbSet.Add(item);
					await DbContext.SaveChangesAsync();
					OnCreated(item, user);

					return Created(item);

				} else {

					var (success, message) = OnUpdate(ref item, record, user);
					if (!success) return BadRequest(message);

					item.Id = record.Id;
					DbSet.Update(item);
					await DbContext.SaveChangesAsync();
					OnUpdated(item, user);

					return Ok(item);

				}

			} catch (Exception ex) {

				HandleException(ex);
				return BadRequest(ModelState);

			}

		}

	}

}