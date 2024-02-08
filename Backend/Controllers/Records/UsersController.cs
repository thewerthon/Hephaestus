using Microsoft.AspNetCore.OData.Query;
using Microsoft.AspNetCore.OData.Results;
using Microsoft.AspNetCore.OData.Routing.Attributes;

namespace Hephaestus.Backend.Controllers {

	public class UsersController : BaseController<UserInfo> {

		public UsersController(DatabaseContext context) : base(context) {

			AllowGet = true;
			AllowList = true;
			AllowPost = true;
			AllowPut = true;
			AllowPatch = true;

		}

		[ODataIgnored]
		[HttpGet("odata/User/{guid}")] // GET By Guid
		[EnableQuery(AllowedQueryOptions = SingleItemQueryOptions, MaxExpansionDepth = 5, MaxAnyAllExpressionDepth = 5, MaxNodeCount = 100, MaxOrderByNodeCount = 10)]
		public ActionResult<SingleResult<UserInfo>> GetByGuid(string guid) {

			try {

				var user = DbSet.AsNoTracking().Where(i => i.Guid == guid);
				return user.Any() ? Ok(SingleResult.Create(user)) : Ok(null);

			} catch (Exception ex) {

				HandleException(ex);
				return BadRequest(ModelState);

			}

		}

		[ODataIgnored]
		[HttpPut("odata/User/{guid}")] // PUT By Guid
		public ActionResult<UserInfo> PutByGuid(string guid, [FromBody] UserInfo item) {

			try {

				if (guid == string.Empty) return BadRequest();
				if (item == null) return BadRequest("Item cannot be null.");
				if (!ModelState.IsValid) return BadRequest(ModelState);

				var user = DbSet.AsNoTracking().FirstOrDefault(i => i.Guid == guid);
				if (user is not null) item.Id = user.Id;

				DbSet.Update(item);
				DbContext.SaveChanges();
				return Ok(item);

			} catch (Exception ex) {

				HandleException(ex);
				return BadRequest(ModelState);

			}

		}

	}

}