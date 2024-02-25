using Microsoft.AspNetCore.OData.Query;
using Microsoft.AspNetCore.OData.Results;

namespace Hephaestus.Backend.Controllers;

public class PreferencesController(DatabaseContext context) : BaseEntityController<Preferences>(context) {

	// GET By User
	[HttpGet("odata/Preferences/{user:int}")]
	[EnableQuery(AllowedQueryOptions = SingleItemQueryOptions, MaxExpansionDepth = 5, MaxAnyAllExpressionDepth = 5)]
	public ActionResult<SingleResult<Preferences>> GetByUser([FromRoute] int user) {

		if (user < 0) user = 0;
		var result = GetItem(i => i.User == user);
		return result;

	}

	// PUT By User
	[HttpPut("odata/Preferences/{user:int}")]
	public async Task<ActionResult> PutByUserAsync([FromRoute] int user, [FromBody] Preferences item) {

		if (user < 0) return BadRequest("Ivalid user.");
		if (!ModelState.IsValid) return BadRequest(ModelState);
		var result = await PutItemAsync(i => i.User == user, item, user);
		return result;

	}

}