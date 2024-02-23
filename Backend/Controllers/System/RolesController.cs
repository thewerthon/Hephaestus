namespace Hephaestus.Backend.Application.Controllers;

public class RolesController(DatabaseContext context)
	: BaseKeyController<Role>(context) { }