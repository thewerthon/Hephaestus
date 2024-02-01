using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Hephaestus.Backend.Controllers {

	[ApiController]
	[AllowAnonymous]
	[Route("api/version")]
	public class VersionController : ControllerBase {

		[HttpGet(Name = "GetVersionInfo")]
		public ActionResult<Version> Get() {

			var version = new Version();
			return Ok(version);

		}

	}

}