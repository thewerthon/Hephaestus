using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;

namespace Hephaestus.Backend.Controllers {

	[ApiController]
	[AllowAnonymous]
	[Route("api/version")]
	public class VersionController : ControllerBase {

		[HttpGet(Name = "GetVersionInfo")]
		public ActionResult<Architect.Models.Version> Get() {

			var version = new Architect.Models.Version();
			return Ok(version);

		}

	}

}