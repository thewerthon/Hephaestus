namespace Hephaestus.Backend.Controllers {

	public class LanguagesController(DatabaseContext context)
		: TypesController<Language>(context) { }

}