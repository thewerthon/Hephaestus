using Microsoft.AspNetCore.OData.Query;
using Microsoft.AspNetCore.OData.Results;

namespace Hephaestus.Backend.Application.Controllers;

public class VersionsController(DatabaseContext context) : BaseTypeController<Version>(context) {

	// GET By Build
	[HttpGet]
	[EnableQuery(AllowedQueryOptions = SingleItemQueryOptions, MaxExpansionDepth = 5, MaxAnyAllExpressionDepth = 5)]
	public virtual ActionResult<SingleResult<Version>> Get(int key) {

		var result = GetBy(i => i.Build == key);
		return result;

	}

}