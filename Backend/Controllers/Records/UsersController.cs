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
			AllowUpsert = true;

		}

		[ODataIgnored]
		[HttpGet("odata/User/{guid}")] // GET By Guid
		[EnableQuery(AllowedQueryOptions = SingleItemQueryOptions, MaxExpansionDepth = 5, MaxAnyAllExpressionDepth = 5, MaxNodeCount = 100, MaxOrderByNodeCount = 10)]
		public virtual ActionResult<SingleResult<UserInfo>> GetByGuid(string guid) {

			var item = DbSet.AsNoTracking().Where(i => i.Guid == guid);
			var result = SingleResult.Create(item);
			return Ok(result);

		}

		[HttpGet] // GET Preferences
		public ActionResult<Preferences> GetPreferences(int key) {

			if (key <= 0) return BadRequest();
			var item = DbContext.Set<Preferences>().AsNoTracking().FirstOrDefault(x => x.User == key);
			return item == null ? NotFound("Item not found.") : Ok(item);

		}

	}

}