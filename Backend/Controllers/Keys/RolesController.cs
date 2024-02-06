namespace Hephaestus.Backend.Controllers {

	public class RolesController(DatabaseContext context)
		: BasicController<UserRole>(context) { }

}