using Microsoft.AspNetCore.OData.Query;
using Microsoft.AspNetCore.OData.Results;

namespace Hephaestus.Backend.Controllers {

	public class UsersController(DatabaseContext context) : RecordsTracedCompleteController<User>(context) {

		// GET By Guid
		[HttpGet("odata/Users/{guid:guid}")]
		[EnableQuery(AllowedQueryOptions = SingleItemQueryOptions, MaxExpansionDepth = 5, MaxAnyAllExpressionDepth = 5)]
		public ActionResult<SingleResult<User>> GetByGuid(string guid) {

			try {

				var record = DbSet.AsNoTracking().Where(i => i.Guid == guid);
				return Ok(SingleResult.Create(record));

			} catch (Exception ex) {

				HandleException(ex);
				return BadRequest(ModelState);

			}

		}

		// PUT By Guid
		[HttpPut("odata/Users/{guid:guid}")]
		public async Task<ActionResult> PutByGuidAsync(string guid, [FromBody] User item, [FromQuery] int user = 1) {

			try {

				if (item == null) return BadRequest("Invalid data.");
				if (!ModelState.IsValid) return BadRequest(ModelState);

				var record = await DbSet.AsNoTracking().FirstOrDefaultAsync(i => i.Guid == guid);

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