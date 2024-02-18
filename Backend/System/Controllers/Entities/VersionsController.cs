namespace Hephaestus.Backend.Application.Controllers;

public class VersionsController(DatabaseContext context)
	: TypesController<Version>(context) { }