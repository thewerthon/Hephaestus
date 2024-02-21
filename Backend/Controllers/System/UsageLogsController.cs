namespace Hephaestus.Backend.Application.Controllers;

public class UsageLogsController(DatabaseContext context)
	: BaseEntityController<UsageLog>(context) { }