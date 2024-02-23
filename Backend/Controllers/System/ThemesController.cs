namespace Hephaestus.Backend.Application.Controllers;

public class ThemesController(DatabaseContext context)
	: BaseKeyController<Theme>(context) { }