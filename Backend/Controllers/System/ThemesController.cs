namespace Hephaestus.Backend.Application.Controllers;

public class ThemesController(DatabaseContext context)
	: BaseTypeKeyController<Theme>(context) { }