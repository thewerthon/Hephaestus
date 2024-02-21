namespace Hephaestus.Backend.Application.Controllers;

public class YesNoController(DatabaseContext context)
	: BaseTypeBoolController<YesNo>(context) { }