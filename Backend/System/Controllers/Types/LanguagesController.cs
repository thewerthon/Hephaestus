namespace Hephaestus.Backend.Application.Controllers;

public class LanguagesController(DatabaseContext context)
	: TypesController<Language>(context) { }