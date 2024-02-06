namespace Hephaestus.Backend.Controllers {

	public class UsersController : BaseController<UserInfo> {

		public UsersController(DatabaseContext context) : base(context) {

			AllowGet = true;
			AllowList = true;
			AllowPost = true;
			AllowPut = true;
			AllowUpsert = true;

		}

		[HttpGet] // GET Preferences
		public ActionResult<Preferences> GetPreferences(int key) {

			if (key <= 0) return BadRequest();
			var item = DbContext.Set<Preferences>().AsNoTracking().FirstOrDefault(x => x.User == key);
			return item == null ? NotFound("Item not found.") : Ok(item);

		}

	}

}