using Microsoft.AspNetCore.OData.Query;
using Microsoft.AspNetCore.OData.Results;

namespace Hephaestus.Backend.Controllers {

	public class UsersController(DatabaseContext context) : RecordsTracedActiveController<User>(context) {

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
		[EnableQuery(AllowedQueryOptions = SingleItemQueryOptions, MaxExpansionDepth = 5, MaxAnyAllExpressionDepth = 5)]
		public ActionResult PutByGuid(string guid, [FromBody] User item, [FromQuery] int user = 0, [FromQuery] bool response = true) {

			try {

				if (item == null) return BadRequest("Invalid data.");
				if (!ModelState.IsValid) return BadRequest(ModelState);

				var record = DbSet.AsNoTracking().FirstOrDefault(i => i.Guid == guid);
				item.Id = record is not null ? record.Id : 0;

				OnUpdate(ref item, user);
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