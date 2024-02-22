using Microsoft.AspNetCore.OData.Query;
using Microsoft.AspNetCore.OData.Results;

namespace Hephaestus.Backend.Application.Controllers;

public abstract class BaseTypeEnumController<TType>(DatabaseContext context) : BaseTypeController<TType>(context) where TType : class, IEnum {

	// GET By Key
	[HttpGet]
	[EnableQuery(AllowedQueryOptions = SingleItemQueryOptions, MaxExpansionDepth = 5, MaxAnyAllExpressionDepth = 5)]
	public virtual ActionResult<SingleResult<TType>> Get(byte key) {

		var result = GetBy(i => i.Key == key);
		return result;

	}

}