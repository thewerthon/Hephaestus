using Microsoft.AspNetCore.OData.Query;
using Microsoft.AspNetCore.OData.Results;

namespace Hephaestus.Backend.Abstractions.Controllers;

public abstract class BaseKeyController<T>(DatabaseContext context) : BaseODataController<T>(context) where T : class, ITypeKey {

	// GET All
	[HttpGet]
	[EnableQuery(AllowedQueryOptions = CollectionQueryOptions, MaxExpansionDepth = 5, MaxAnyAllExpressionDepth = 5, MaxNodeCount = 100, MaxOrderByNodeCount = 10)]
	public virtual ActionResult<IQueryable<T>> Get() {

		var result = GetItems();
		return result;

	}

	// GET By Key
	[HttpGet]
	[EnableQuery(AllowedQueryOptions = SingleItemQueryOptions, MaxExpansionDepth = 5, MaxAnyAllExpressionDepth = 5)]
	public virtual ActionResult<SingleResult<T>> Get([FromRoute] string key) {

		var result = GetItem(i => i.Key == key);
		return result;

	}

}