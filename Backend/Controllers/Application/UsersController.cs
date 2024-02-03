using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.OData.Query;
using Microsoft.AspNetCore.OData.Results;
using Microsoft.EntityFrameworkCore;
using Hephaestus.Backend.Database;
using Hephaestus.Architect.Models;
using Hephaestus.Frontend.Pages;

namespace Hephaestus.Backend.Controllers {

	public class UsersController : BaseController<UserInfo> {

		public UsersController(DatabaseContext context) : base(context) {

			AllowPost = true;
			AllowGet = true;
			AllowPut = true;
			AllowPatch = true;
			AllowDelete = true;
			AllowUpsert = true;
			AllowList = true;

		}

		[HttpGet] // GET Preferences
		public ActionResult<Preferences> GetPreferences(int key) {

			if (key <= 0) return BadRequest();
			var item = DbContext.Preferences.AsNoTracking().FirstOrDefault(x => x.UserId == key);
			return item == null ? NotFound("Item not found.") : Ok(item);

		}

	}

}