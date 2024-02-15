namespace Hephaestus.Backend.Controllers {

	[Route("app/version")]
	public class VersionController : ControllerBase {

		[HttpGet]
		public ActionResult<Architect.Models.Version> Get() {

			return Ok(new Architect.Models.Version());

		}

	}

}