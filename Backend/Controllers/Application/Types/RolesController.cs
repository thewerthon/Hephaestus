﻿namespace Hephaestus.Backend.Controllers {

	public class RolesController(DatabaseContext context)
		: TypesController<UserRole>(context) { }

}