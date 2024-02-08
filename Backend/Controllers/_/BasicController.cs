using Microsoft.AspNetCore.OData.Query;
using Microsoft.AspNetCore.OData.Routing.Attributes;
using Microsoft.AspNetCore.OData.Routing.Controllers;

namespace Hephaestus.Backend.Controllers {

	[ODataAttributeRouting]
	public abstract class BasicController<T> : ODataController where T : class {

		// DbContext and DbSet
		protected readonly DatabaseContext DbContext;
		protected readonly DbSet<T> DbSet;

		// Constructor
		public BasicController(DatabaseContext context) {
			DbContext = context;
			DbSet = DbContext.Set<T>();
		}

		// Query Options for Collections
		protected const AllowedQueryOptions CollectionQueryOptions =
			AllowedQueryOptions.Select | AllowedQueryOptions.Expand | AllowedQueryOptions.Filter | AllowedQueryOptions.OrderBy |
			AllowedQueryOptions.Count | AllowedQueryOptions.Top | AllowedQueryOptions.Skip | AllowedQueryOptions.SkipToken |
			AllowedQueryOptions.Search | AllowedQueryOptions.Apply | AllowedQueryOptions.Compute;

		// LIST
		[HttpGet]
		[EnableQuery(AllowedQueryOptions = CollectionQueryOptions, MaxExpansionDepth = 5, MaxAnyAllExpressionDepth = 5, MaxNodeCount = 100, MaxOrderByNodeCount = 10)]
		public virtual ActionResult<IQueryable<T>> Get() {

			try {

				var items = DbSet.AsNoTracking().AsQueryable();
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

}