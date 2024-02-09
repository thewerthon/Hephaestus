namespace Hephaestus.Backend.Controllers {

	[Route("odata/Version")]
	public class VersionController : ControllerBase {

		[HttpGet]
		public ActionResult<Architect.Models.Version> Get() {

			return base.Ok(new Architect.Models.Version());

		}

	}

}