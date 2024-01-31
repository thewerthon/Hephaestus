using Microsoft.AspNetCore.Mvc;
using Architect.Application.Models;
using Backend.Database;

namespace Backend.Application.Controllers {

	[ApiController]
	[Route("api/[controller]")]
	public class BaseController(DatabaseContext Database) : ControllerBase {

		public readonly DatabaseContext Database = Database;

	}

}