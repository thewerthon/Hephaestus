using System.Threading.Tasks;
using System.Collections.Generic;
using Microsoft.AspNetCore.Authorization;
using Microsoft.Identity.Web.Resource;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Mvc;
using Backend.Database;
using Architect.Application.Models;

namespace Backend.Application.Controllers {

	//[Authorize]
	[ApiController]
	[Route("api/application/[controller]")]
	//[RequiredScope(RequiredScopesConfigurationKey = "AzureAd:Scopes")]
	public class UserInfoController(DatabaseContext context) : ControllerBase {

		private readonly DatabaseContext Database = context;

		[HttpGet]
		public async Task<ActionResult<IEnumerable<UserInfo>>> GetUserInfos() {
			return await Database.Users.ToListAsync();
		}

		[HttpGet("{id}")]
		public async Task<ActionResult<UserInfo>> GetUserInfo(int id) {
			var userInfo = await Database.Users.FindAsync(id);
			return userInfo == null ? NotFound() : userInfo;
		}

	}

}
