namespace Hephaestus.Backend.Controllers {

	public class VersionsController(DatabaseContext context)
		: TypesController<Architect.Models.Version>(context) { }

}