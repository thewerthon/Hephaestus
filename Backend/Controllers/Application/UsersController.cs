namespace Hephaestus.Backend.Controllers {

	public class UsersController : BaseController<UserInfo> {

		public UsersController(DatabaseContext context) : base(context) {

			AllowPost = true;
			AllowGet = true;
			AllowPut = true;
			AllowPatch = false;
			AllowDelete = false;
			AllowUpsert = true;
			AllowList = true;

		}

		[HttpGet] // GET Preferences
		public ActionResult<Preferences> GetPreferences(int key) {

			if (key <= 0) return BadRequest();
			var item = DbContext.Set<Preferences>().AsNoTracking().FirstOrDefault(x => x.UserId == key);
			return item == null ? NotFound("Item not found.") : Ok(item);

		}

	}

}