namespace Hephaestus.Backend.Application.Controllers;

public class YesNoController(DatabaseContext context)
	: BaseBoolController<YesNo>(context) { }