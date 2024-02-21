namespace Hephaestus.Backend.Application.Controllers;

[Route("app/version")]
public class VersionController : ControllerBase {

	[HttpGet]
	public ActionResult<Version> Get() {

		return Ok(new Version());

	}

}