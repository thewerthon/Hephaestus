namespace Hephaestus.Backend.Controllers {

	[Route("odata/Status")]
	public class StatusController : ControllerBase {

		[HttpGet]
		public ActionResult Get() {

			return Ok();

		}

	}

}