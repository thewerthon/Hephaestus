using Microsoft.AspNetCore.OData.Query;
using Microsoft.AspNetCore.OData.Results;
using Microsoft.AspNetCore.OData.Routing.Attributes;

namespace Hephaestus.Backend.Controllers {

	public class PreferencesController(DatabaseContext context) : BaseController<Preferences>(context) {

		// GET By User
		[ODataIgnored]
		[HttpGet("odata/Preferences/{user}")]
		[EnableQuery(AllowedQueryOptions = SingleItemQueryOptions, MaxExpansionDepth = 5, MaxAnyAllExpressionDepth = 5)]
		public ActionResult<SingleResult<UserInfo>> GetByUser(int user) {

			try {

				var record = DbSet.AsNoTracking().Where(i => i.User == user);
				return record.Any() ? Ok(SingleResult.Create(record)) : Ok(null);

			} catch (Exception ex) {

				HandleException(ex);
				return BadRequest(ModelState);

			}

		}

		// PUT By User
		[ODataIgnored]
		[HttpPut("odata/Preferences/{user}")]
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