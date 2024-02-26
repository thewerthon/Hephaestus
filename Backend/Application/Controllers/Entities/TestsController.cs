namespace Hephaestus.Backend.Application.Controllers;

public class TestsController(DatabaseContext context) : BaseEntityController<User>(context) { }