using Version = Hephaestus.Architect.Models.Version;

namespace Hephaestus.Backend.Controllers {

	public class VersionsController(DatabaseContext context)
		: TypesController<Version>(context) { }

}