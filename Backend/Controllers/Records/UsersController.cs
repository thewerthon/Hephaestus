using Microsoft.AspNetCore.OData.Query;
using Microsoft.AspNetCore.OData.Results;
using Microsoft.AspNetCore.OData.Routing.Attributes;

namespace Hephaestus.Backend.Controllers {

	public class UsersController(DatabaseContext context) : BaseController<UserInfo>(context) {

		// GET By Guid
		[ODataIgnored]
		[HttpGet("odata/User/{guid}")]
		[EnableQuery(AllowedQueryOptions = SingleItemQueryOptions, MaxExpansionDepth = 5, MaxAnyAllExpressionDepth = 5)]
		public ActionResult<SingleResult<UserInfo>> GetByGuid(string guid) {

			try {

				var record = DbSet.AsNoTracking().Where(i => i.Guid == guid);
				return record.Any() ? Ok(SingleResult.Create(record)) : Ok(null);

			} catch (Exception ex) {

				HandleException(ex);
				return BadRequest(ModelState);

			}

		}

		// PUT By Guid
		[ODataIgnored]
		[HttpPut("odata/User/{guid}")]
		[EnableQuery(AllowedQueryOptions = SingleItemQueryOptions, MaxExpansionDepth = 5, MaxAnyAllExpressionDepth = 5)]
		public ActionResult PutByGuid(string guid, [FromBody] UserInfo item, [FromQuery] bool response = true) {

			try {

				if (item == null) return BadRequest("Invalid data.");
				if (!ModelState.IsValid) return BadRequest(ModelState);

				var record = DbSet.AsNoTracking().FirstOrDefault(i => i.Guid == guid);
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