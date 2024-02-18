using Microsoft.AspNetCore.OData.Query;
using Microsoft.AspNetCore.OData.Results;

namespace Hephaestus.Backend.Application.Controllers;

public class UsersController(DatabaseContext context) : BaseEntityTraceableController<User>(context) {

	// GET By Guid
	[HttpGet("odata/Users/{guid:guid}")]
	[EnableQuery(AllowedQueryOptions = SingleItemQueryOptions, MaxExpansionDepth = 5, MaxAnyAllExpressionDepth = 5)]
	public ActionResult<SingleResult<User>> GetByGuid(string guid) {

		if (string.IsNullOrEmpty(guid)) return BadRequest("Ivalid guid.");
		var result = GetBy(i => i.Guid == guid);
		return result;

	}

	// PUT By Guid
	[HttpPut("odata/Users/{guid:guid}")]
	public async Task<ActionResult> PutByGuidAsync(string guid, [FromBody] User item, [FromQuery] int user = 1) {

		if (string.IsNullOrEmpty(guid)) return BadRequest("Ivalid guid.");
		if (!ModelState.IsValid) return BadRequest(ModelState);
		var result = await PutByAsync(i => i.Guid == guid, item, user);
		return result;

	}

}