using Microsoft.AspNetCore.Authorization;

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