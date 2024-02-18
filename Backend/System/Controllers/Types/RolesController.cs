namespace Hephaestus.Backend.Application.Controllers;

public class RolesController(DatabaseContext context)
	: TypesController<Role>(context) { }