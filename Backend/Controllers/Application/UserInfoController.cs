using Hephaestus.Architect.Models;
using Hephaestus.Backend.Database;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.OData.Deltas;
using Microsoft.AspNetCore.OData.Query;
using Microsoft.AspNetCore.OData.Results;
using Microsoft.AspNetCore.OData.Routing.Controllers;
using Microsoft.EntityFrameworkCore;

namespace Hephaestus.Backend.Controllers {

	[ApiController]
	[Route("odata/users")]
	public partial class UserInfoController(DatabaseContext context) : ODataController {

		private readonly DatabaseContext DbContext = context;

		// GET: /odata/users
		[HttpGet("/odata/users")]
		[EnableQuery(MaxExpansionDepth = 10, MaxAnyAllExpressionDepth = 10, MaxNodeCount = 1000)]
		public ActionResult<IEnumerable<UserInfo>> GetUsers() {

			var items = DbContext.UserInfos.AsNoTracking().AsQueryable();
			return Ok(items);

		}

		// POST: /odata/users
		[HttpPost("/odata/users")]
		[EnableQuery(MaxExpansionDepth = 10, MaxAnyAllExpressionDepth = 10, MaxNodeCount = 1000)]
		public IActionResult Post([FromBody] UserInfo item) {

			try {

				if (item == null) return BadRequest("Item cannot be null");
				if (item.Id != 0) return BadRequest("Id must be 0");
				if (!ModelState.IsValid) return BadRequest(ModelState);

				DbContext.UserInfos.Add(item);
				DbContext.SaveChanges();

				var itemToReturn = DbContext.UserInfos.Where(i => i.Id == item.Id);

				return new ObjectResult(SingleResult.Create(itemToReturn)) {
					StatusCode = 201
				};

			} catch (Exception ex) {

				ModelState.AddModelError("Exception", ex.Message);
				ModelState.AddModelError("InnerException", ex.InnerException?.Message ?? string.Empty);
				return BadRequest(ModelState);

			}

		}

		// GET: /odata/users/id
		[HttpGet("{id}", Name = "GetUser")]
		[EnableQuery(MaxExpansionDepth = 10, MaxAnyAllExpressionDepth = 10, MaxNodeCount = 1000)]
		public async Task<ActionResult<UserInfo>> GetUserAsync(int id) {

			var item = await DbContext.UserInfos.AsNoTracking().FirstAsync(x => x.Id == id);
			return Ok(item);

			//var items = DbContext.UserInfos.Where(i => i.Id == id);
			//var result = SingleResult.Create(items);
			//return result;

		}

		// PUT: /odata/users/id
		[HttpPut("/odata/users(id={id})")]
		[EnableQuery(MaxExpansionDepth = 10, MaxAnyAllExpressionDepth = 10, MaxNodeCount = 1000)]
		public IActionResult PutUser(int id, [FromBody] UserInfo item) {

			try {

				if (!ModelState.IsValid) return BadRequest(ModelState);
				if (item == null || item.Id != id) return BadRequest();

				DbContext.UserInfos.Update(item);
				DbContext.SaveChanges();

				var itemToReturn = DbContext.UserInfos.Where(i => i.Id == id);
				return new ObjectResult(SingleResult.Create(itemToReturn));

			} catch (Exception ex) {

				ModelState.AddModelError("", ex.Message);
				return BadRequest(ModelState);

			}

		}

		// PATCH: /odata/users/id
		[HttpPatch("/odata/users(id={id})")]
		[EnableQuery(MaxExpansionDepth = 10, MaxAnyAllExpressionDepth = 10, MaxNodeCount = 1000)]
		public IActionResult PatchUser(int id, [FromBody] Delta<UserInfo> patch) {

			try {

				if (!ModelState.IsValid) return BadRequest(ModelState);
				var item = DbContext.UserInfos.Where(i => i.Id == id).FirstOrDefault();
				if (item == null) return BadRequest();

				patch.Patch(item);
				DbContext.UserInfos.Update(item);
				DbContext.SaveChanges();

				var itemToReturn = DbContext.UserInfos.Where(i => i.Id == id);
				return new ObjectResult(SingleResult.Create(itemToReturn));

			} catch (Exception ex) {

				ModelState.AddModelError("", ex.Message);
				return BadRequest(ModelState);

			}

		}

		// DELETE: /odata/users/id
		[HttpDelete("/odata/users(id={id})")]
		public IActionResult DeleteUser(int id) {

			try {

				if (!ModelState.IsValid) return BadRequest(ModelState);
				var item = DbContext.UserInfos.Where(i => i.Id == id).FirstOrDefault();
				if (item == null) return BadRequest();

				DbContext.UserInfos.Remove(item);
				DbContext.SaveChanges();
				return new NoContentResult();

			} catch (Exception ex) {

				ModelState.AddModelError("", ex.Message);
				return BadRequest(ModelState);

			}

		}

	}

}