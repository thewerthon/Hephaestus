using Hephaestus.Architect.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Hephaestus.Backend.Controllers {

	[ApiController]
	[Route("application/version")]
	public class VersionController : ControllerBase {

		[HttpGet]
		[AllowAnonymous]
		public ActionResult<AppVersion> Get() {

			var version = new AppVersion();
			return Ok(version);

		}

	}

}