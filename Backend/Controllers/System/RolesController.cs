namespace Hephaestus.Backend.Application.Controllers;

public class RolesController(DatabaseContext context)
	: BaseTypeKeyController<Role>(context) { }