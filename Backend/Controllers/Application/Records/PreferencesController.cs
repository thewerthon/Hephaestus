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
		[EnableQuery(AllowedQueryOptions = SingleItemQueryOptions, MaxExpansionDepth = 5, MaxAnyAllExpressionDepth = 5)]
		public ActionResult PutByUser(int user, [FromBody] Preferences item, [FromQuery] bool response = true) {

			try {

				if (user < 0) user = 0;
				if (item == null) return BadRequest("Invalid data.");
				if (!ModelState.IsValid) return BadRequest(ModelState);

				var record = DbSet.AsNoTracking().FirstOrDefault(i => i.User == user);
				item.Id = record is not null ? record.Id : 0;

				DbSet.Update(item);
				DbContext.SaveChanges();

				if (!response) return Ok();
				var result = DbSet.AsNoTracking().Where(i => i.Id == item.Id);
				return Ok(SingleResult.Create(result));

			} catch (Exception ex) {

				HandleException(ex);
				return BadRequest(ModelState);

			}

		}

	}

}