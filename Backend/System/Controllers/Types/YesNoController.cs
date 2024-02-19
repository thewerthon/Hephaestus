namespace Hephaestus.Backend.Application.Controllers;

public class YesNoController(DatabaseContext context)
	: TypesController<YesNo>(context) { }