using Microsoft.AspNetCore.Mvc;
using Architect.Application.Models;
using Microsoft.AspNetCore.Authorization;

namespace Backend.Application.Controllers {

	[ApiController]
	[AllowAnonymous]
	[Route("api/application/[controller]")]
	public class VersionInfoController : ControllerBase {

		[HttpGet(Name = "GetVersionInfo")]
		public ActionResult<VersionInfo> Get() {

			var ServerVersion = new VersionInfo();
			return Ok(ServerVersion);

		}

	}

}