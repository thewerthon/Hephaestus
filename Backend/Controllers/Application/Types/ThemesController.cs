namespace Hephaestus.Backend.Controllers {

	public class ThemesController(DatabaseContext context)
		: TypesController<Theme>(context) { }

}