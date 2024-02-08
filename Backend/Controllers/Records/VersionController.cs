namespace Hephaestus.Backend.Controllers {

	[Route("odata/Version")]
	public class VersionController : ControllerBase {

		[HttpGet]
		public ActionResult<AppVersion> Get() {

			return Ok(new AppVersion());

		}

	}

}