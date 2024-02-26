using Microsoft.AspNetCore.OData.Results;

namespace Hephaestus.Backend.Application.Controllers;

public class VersionsController(DatabaseContext context) : BaseODataController<Version>(context) {

	// GET By Build
	[HttpGet]
	public virtual ActionResult<SingleResult<Version>> Get([FromRoute] int key) {

		if (key < 0) key = 0;
		var result = GetItem(i => i.Build == key);
		return result;

	}

}