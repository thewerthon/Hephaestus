using Version = Hephaestus.Architect.Models.Version;

namespace Hephaestus.Backend.Controllers {

	[Route("app/version")]
	public class VersionController : ControllerBase {

		[HttpGet]
		public ActionResult<Version> Get() {

			return Ok(new Version());

		}

	}

}