using Microsoft.AspNetCore.Authorization;

namespace Hephaestus.Backend.Controllers {

	[ApiController]
	[Route("odata/appversion")]
	public class AppVersionController : ControllerBase {

		[HttpGet]
		[AllowAnonymous]
		public ActionResult<AppVersion> Get() {

			var version = new AppVersion();
			return Ok(version);

		}

	}

}