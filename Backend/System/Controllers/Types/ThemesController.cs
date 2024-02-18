namespace Hephaestus.Backend.Application.Controllers;

public class ThemesController(DatabaseContext context)
	: TypesController<Theme>(context) { }