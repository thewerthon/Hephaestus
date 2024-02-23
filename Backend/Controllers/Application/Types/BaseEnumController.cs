using Microsoft.AspNetCore.OData.Query;
using Microsoft.AspNetCore.OData.Results;
using Microsoft.AspNetCore.OData.Routing.Attributes;
using Microsoft.AspNetCore.OData.Routing.Controllers;

namespace Hephaestus.Backend.Application.Controllers;

[ODataAttributeRouting]
public abstract class BaseTypeController<TType> : ODataController where TType : class, IEnum {

	// DbContext and DbSet
	protected readonly DatabaseContext DbContext;
	protected readonly DbSet<TType> DbSet;

	// Constructor
	public BaseTypeController(DatabaseContext context) {
		DbContext = context;
		DbSet = DbContext.Set<TType>();
	}

	// Query Options for Single Item
	protected const AllowedQueryOptions SingleItemQueryOptions =
		AllowedQueryOptions.Select | AllowedQueryOptions.Expand | AllowedQueryOptions.Compute;

	// Query Options for Collections
	protected const AllowedQueryOptions CollectionQueryOptions =
		AllowedQueryOptions.Select | AllowedQueryOptions.Expand | AllowedQueryOptions.Filter | AllowedQueryOptions.OrderBy |
		AllowedQueryOptions.Count | AllowedQueryOptions.Top | AllowedQueryOptions.Skip | AllowedQueryOptions.SkipToken |
		AllowedQueryOptions.Search | AllowedQueryOptions.Apply | AllowedQueryOptions.Compute;

	// GET By
	protected virtual ActionResult<SingleResult<TType>> GetBy(System.Linq.Expressions.Expression<Func<TType, bool>> predicate) {

		try {

			var record = DbSet.AsNoTracking().Where(predicate).AsQueryable();
			return Ok(SingleResult.Create(record));

		} catch (Exception ex) {

			HandleException(ex);
			return BadRequest(ModelState);

		}

	}

	// GET By Key
	[HttpGet]
	[EnableQuery(AllowedQueryOptions = SingleItemQueryOptions, MaxExpansionDepth = 5, MaxAnyAllExpressionDepth = 5)]
	public virtual ActionResult<SingleResult<TType>> Get(byte key) {

		var result = GetBy(i => i.Key == key);
		return result;

	}

	// GET All
	[HttpGet]
	[EnableQuery(AllowedQueryOptions = CollectionQueryOptions, MaxExpansionDepth = 5, MaxAnyAllExpressionDepth = 5, MaxNodeCount = 100, MaxOrderByNodeCount = 10)]
	public virtual ActionResult<IQueryable<TType>> Get() {

		try {

			var items = DbSet.AsNoTracking();
			return Ok(items);

		} catch (Exception ex) {

			HandleException(ex);
			return BadRequest(ModelState);

		}

	}

	// Exception Handling
	protected virtual void HandleException(Exception ex) {

		ModelState.AddModelError("exception", ex.Message);
		ModelState.AddModelError("innerexception", ex.InnerException?.Message ?? string.Empty);

	}

}