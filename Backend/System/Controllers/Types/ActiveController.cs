namespace Hephaestus.Backend.Application.Controllers;

public class ActiveController(DatabaseContext context)
	: TypesController<Active>(context) { }