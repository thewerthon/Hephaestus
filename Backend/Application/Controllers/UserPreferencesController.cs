using Microsoft.AspNetCore.Mvc;
using Architect.Application.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.Identity.Web.Resource;

namespace Backend.Application.Controllers {

	[Authorize]
	[ApiController]
	[Route("api/application/[controller]")]
	[RequiredScope(RequiredScopesConfigurationKey = "AzureAd:Scopes")]
	public class UserPreferencesController : ControllerBase {

		[HttpGet(Name = "GetUserPreferences")]
		public ActionResult<UserPreferences> Get() {

			var UserPreferences = new UserPreferences() { Theme = "dark", Language = "en" };
			return Ok(UserPreferences);

		}

	}

}