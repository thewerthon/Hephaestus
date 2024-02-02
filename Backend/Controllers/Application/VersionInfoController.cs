using Hephaestus.Architect.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Hephaestus.Backend.Controllers {

	[ApiController]
	[AllowAnonymous]
	[Route("/odata/version")]
	public class VersionInfoController : ControllerBase {

		[HttpGet]
		public ActionResult<VersionInfo> Get() {

			var version = new VersionInfo();
			return Ok(version);

		}

	}

}