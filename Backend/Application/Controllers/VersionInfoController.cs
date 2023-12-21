using Microsoft.AspNetCore.Mvc;
using Architect.Application.Models;

namespace Backend.Application.Controllers {

	[ApiController]
	[Route("api/[controller]")]
	public class VersionInfoController : ControllerBase {

		[HttpGet(Name = "GetVersionInfo")]
		public ActionResult<VersionInfo> Get() {

			var ServerVersion = new VersionInfo();
			return Ok(ServerVersion);

		}

	}

}