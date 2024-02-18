namespace Hephaestus.Backend.Application.Controllers;

[Route("app/status")]
public class StatusController : ControllerBase {

	[HttpGet]
	public ActionResult Get() {

		return Ok();

	}

}