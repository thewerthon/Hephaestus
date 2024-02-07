using Microsoft.AspNetCore.OData.Query;
using Microsoft.AspNetCore.OData.Results;
using Microsoft.AspNetCore.OData.Routing.Attributes;

namespace Hephaestus.Backend.Controllers {

	public class UsersController : BaseController<UserInfo> {

		public UsersController(DatabaseContext context) : base(context) {

			AllowGet = true;
			AllowList = true;

		}

		[ODataIgnored]
		[HttpPut("odata/User/{guid}")] // PUT By Guid
		[EnableQuery(AllowedQueryOptions = SingleItemQueryOptions, MaxExpansionDepth = 5, MaxAnyAllExpressionDepth = 5, MaxNodeCount = 100, MaxOrderByNodeCount = 10)]
		public ActionResult<SingleResult<UserInfo>> PutByGuid(string guid, [FromBody] UserInfo item) {

			try {

				if (guid == string.Empty) return BadRequest();
				if (item == null) return BadRequest("Item cannot be null.");
				if (!ModelState.IsValid) return BadRequest(ModelState);

				var exists = DbSet.AsNoTracking().Any(i => i.Guid == item.Guid);

				if (exists) {

					DbSet.Update(item);
					DbContext.SaveChanges();

				} else {

					DbSet.Add(item);
					DbContext.SaveChanges();

				}

				var result = DbSet.Where(i => i.Guid == item.Guid);
				return Ok(SingleResult.Create(result));

			} catch (Exception ex) {

				HandleException(ex);
				return BadRequest(ModelState);

			}

		}

		[ODataIgnored]
		[HttpGet("odata/User/{guid}")] // GET By Guid
		[EnableQuery(AllowedQueryOptions = SingleItemQueryOptions, MaxExpansionDepth = 5, MaxAnyAllExpressionDepth = 5, MaxNodeCount = 100, MaxOrderByNodeCount = 10)]
		public ActionResult<SingleResult<UserInfo>> GetByGuid(string guid) {

			try {

				if (guid == string.Empty) return BadRequest();
				var item = DbSet.AsNoTracking().Where(i => i.Guid == guid);
				var result = SingleResult.Create(item);
				return Ok(result);

			} catch (Exception ex) {

				HandleException(ex);
				return BadRequest(ModelState);

			}

		}

	}

}