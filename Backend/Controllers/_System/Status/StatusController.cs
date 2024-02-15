namespace Hephaestus.Backend.Controllers {

	[Route("app/status")]
	public class StatusController : ControllerBase {

		[HttpGet]
		public ActionResult Get() {

			return Ok();

		}

	}

}