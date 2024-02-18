namespace Hephaestus.Backend.Application.Controllers;

public class HiddenController(DatabaseContext context)
	: TypesController<Hidden>(context) { }