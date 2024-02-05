namespace Hephaestus.Backend.Controllers {

	public class PreferencesController : BaseController<Preferences> {

		public PreferencesController(DatabaseContext context) : base(context) {

			AllowPost = true;
			AllowGet = true;
			AllowPut = true;
			AllowPatch = false;
			AllowDelete = false;
			AllowUpsert = true;
			AllowList = true;

		}

	}

}