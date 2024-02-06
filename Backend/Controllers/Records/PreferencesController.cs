namespace Hephaestus.Backend.Controllers {

	public class PreferencesController : BaseController<Preferences> {

		public PreferencesController(DatabaseContext context) : base(context) {

			AllowGet = true;
			AllowList = true;
			AllowPost = true;
			AllowPut = true;
			AllowPatch = true;

		}

	}

}