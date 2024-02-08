using Microsoft.AspNetCore.OData.Query;
using Microsoft.AspNetCore.OData.Results;
using Microsoft.AspNetCore.OData.Routing.Attributes;

namespace Hephaestus.Backend.Controllers {

	public class PreferencesController : BaseController<Preferences> {

		public PreferencesController(DatabaseContext context) : base(context) {

			AllowGet = true;
			AllowList = true;
			AllowPost = true;
			AllowPut = true;

		}

		[ODataIgnored]
		[HttpGet("odata/Preferences/{user}")] // GET By User
		[EnableQuery(AllowedQueryOptions = SingleItemQueryOptions, MaxExpansionDepth = 5, MaxAnyAllExpressionDepth = 5, MaxNodeCount = 100, MaxOrderByNodeCount = 10)]
		public ActionResult<SingleResult<Preferences>> GetByUser(int user) {

			try {

				var item = DbSet.AsNoTracking().Where(i => i.User == user);
				return item.Any() ? Ok(SingleResult.Create(item)) : Ok(null);

			} catch (Exception ex) {

				HandleException(ex);
				return BadRequest(ModelState);

			}

		}

		[ODataIgnored]
		[HttpPut("odata/Preferences/{user}")] // PUT By User
		[EnableQuery(AllowedQueryOptions = SingleItemQueryOptions, MaxExpansionDepth = 5, MaxAnyAllExpressionDepth = 5, MaxNodeCount = 100, MaxOrderByNodeCount = 10)]
		public ActionResult<SingleResult<Preferences>> PutByUser(int user, [FromBody] Preferences item) {

			try {

				if (item == null) return BadRequest("Item cannot be null.");
				if (!ModelState.IsValid) return BadRequest(ModelState);

				var prefs = DbSet.AsNoTracking().Where(i => i.User == user);

				if (prefs.Any()) {

					DbSet.Add(item);
					DbContext.SaveChanges();

				} else {

					DbSet.Update(item);
					DbContext.SaveChanges();

				}

				return Ok(item);

			} catch (Exception ex) {

				HandleException(ex);
				return BadRequest(ModelState);

			}

		}

	}

}