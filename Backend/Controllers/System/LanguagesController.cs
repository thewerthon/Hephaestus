namespace Hephaestus.Backend.Application.Controllers;

public class LanguagesController(DatabaseContext context)
	: BaseTypeKeyController<Language>(context) { }