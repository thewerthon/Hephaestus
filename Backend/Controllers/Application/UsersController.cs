using Hephaestus.Backend.Database;
using Hephaestus.Architect.Models;
using Microsoft.AspNetCore.Mvc;

namespace Hephaestus.Backend.Controllers {

	[Route("/odata/users")]
	public class UsersController : BaseController<UserInfo> {

		public UsersController(DatabaseContext context) : base(context) {

			AllowPost = true;
			AllowGet = true;
			AllowPut = true;
			AllowPatch = true;
			AllowDelete = true;
			AllowList = true;

		}

	}

}