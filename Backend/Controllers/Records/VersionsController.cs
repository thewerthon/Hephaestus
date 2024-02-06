namespace Hephaestus.Backend.Controllers {

	public class VersionsController(DatabaseContext context)
		: BasicController<AppVersion>(context) { }

}