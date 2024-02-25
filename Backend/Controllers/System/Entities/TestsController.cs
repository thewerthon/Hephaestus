namespace Hephaestus.Backend.Controllers;

public class TestsController(DatabaseContext context) : BaseEntityController<User>(context) { }