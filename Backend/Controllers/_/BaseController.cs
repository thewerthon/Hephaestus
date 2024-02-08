using Microsoft.AspNetCore.OData.Query;
using Microsoft.AspNetCore.OData.Deltas;
using Microsoft.AspNetCore.OData.Results;
using Microsoft.AspNetCore.OData.Routing.Attributes;
using Microsoft.AspNetCore.OData.Routing.Controllers;

namespace Hephaestus.Backend.Controllers {

	[ODataAttributeRouting]
	public abstract class BaseController<T> : ODataController where T : class, IRecord {

		// DbContext and DbSet
		protected readonly DatabaseContext DbContext;
		protected readonly DbSet<T> DbSet;

		// Constructor
		public BaseController(DatabaseContext context) {
			DbContext = context;
			DbSet = DbContext.Set<T>();
		}

		// Query Options for Collections
		protected const AllowedQueryOptions CollectionQueryOptions =
			AllowedQueryOptions.Select | AllowedQueryOptions.Expand | AllowedQueryOptions.Filter | AllowedQueryOptions.OrderBy |
			AllowedQueryOptions.Count | AllowedQueryOptions.Top | AllowedQueryOptions.Skip | AllowedQueryOptions.SkipToken |
			AllowedQueryOptions.Search | AllowedQueryOptions.Apply | AllowedQueryOptions.Compute;

		// Query Options for Single Item
		protected const AllowedQueryOptions SingleItemQueryOptions =
			AllowedQueryOptions.Select | AllowedQueryOptions.Expand | AllowedQueryOptions.Compute;

		// POST
		[HttpPost]
		[EnableQuery(AllowedQueryOptions = SingleItemQueryOptions, MaxExpansionDepth = 5, MaxAnyAllExpressionDepth = 5)]
		public virtual IActionResult Post([FromBody] T item, [FromQuery] bool response = true) {

			try {

				if (item == null) return BadRequest("Invalid data.");
				if (!ModelState.IsValid) return BadRequest(ModelState);

				item.Id = 0;
				DbSet.Add(item);
				DbContext.SaveChanges();

				if (!response) return Ok();
				var result = DbSet.AsNoTracking().Where(i => i.Id == item.Id);
				return Ok(SingleResult.Create(result));

			} catch (Exception ex) {

				HandleException(ex);
				return BadRequest(ModelState);

			}

		}

		// GET
		[HttpGet]
		[EnableQuery(AllowedQueryOptions = SingleItemQueryOptions, MaxExpansionDepth = 5, MaxAnyAllExpressionDepth = 5)]
		public virtual ActionResult<SingleResult<T>> Get(int key) {

			try {

				if (key <= 0) return BadRequest("Invalid key.");
				if (!ModelState.IsValid) return BadRequest(ModelState);

				var record = DbSet.AsNoTracking().Where(i => i.Id == key);
				return record.Any() ? Ok(SingleResult.Create(record)) : Ok(null);

			} catch (Exception ex) {

				HandleException(ex);
				return BadRequest(ModelState);

			}

		}

		// PUT
		[HttpPut]
		[EnableQuery(AllowedQueryOptions = SingleItemQueryOptions, MaxExpansionDepth = 5, MaxAnyAllExpressionDepth = 5)]
		public virtual IActionResult Put(int key, [FromBody] T item, [FromQuery] bool response = true) {

			try {

				if (key < 0) return BadRequest("Ivalid key.");
				if (item == null) return BadRequest("Invalid data.");
				if (!ModelState.IsValid) return BadRequest(ModelState);

				var record = DbSet.AsNoTracking().FirstOrDefault(i => i.Id == key);
				item.Id = record is not null ? record.Id : 0;

				DbSet.Update(item);
				DbContext.SaveChanges();

				if (!response) return Ok();
				var result = DbSet.AsNoTracking().Where(i => i.Id == item.Id);
				return Ok(SingleResult.Create(result));

			} catch (Exception ex) {

				HandleException(ex);
				return BadRequest(ModelState);

			}

		}

		// PATCH
		[HttpPatch]
		[EnableQuery(AllowedQueryOptions = SingleItemQueryOptions, MaxExpansionDepth = 5, MaxAnyAllExpressionDepth = 5)]
		public virtual IActionResult Patch(int key, [FromBody] Delta<T> item, [FromQuery] bool response = true) {

			try {

				if (key <= 0) return BadRequest("Invalid key.");
				if (item == null) return BadRequest("Invalid data.");
				if (!item.GetChangedPropertyNames().Any()) return BadRequest("Invalid data.");
				if (!ModelState.IsValid) return BadRequest(ModelState);

				var record = DbSet.FirstOrDefault(i => i.Id == key);
				if (record is null) return NotFound("Item not exists.");

				item.TrySetPropertyValue("Id", key);
				item.Patch(record);

				DbSet.Update(record);
				DbContext.SaveChanges();

				if (!response) return Ok();
				var result = DbSet.AsNoTracking().Where(i => i.Id == record.Id);
				return Ok(SingleResult.Create(result));

			} catch (Exception ex) {

				HandleException(ex);
				return BadRequest(ModelState);

			}

		}

		// DELETE
		[HttpDelete]
		[EnableQuery(AllowedQueryOptions = SingleItemQueryOptions, MaxExpansionDepth = 5, MaxAnyAllExpressionDepth = 5)]
		public virtual IActionResult Delete(int key) {

			try {

				if (key <= 0) return BadRequest("Invalid key.");
				if (!ModelState.IsValid) return BadRequest(ModelState);

				var record = DbSet.AsNoTracking().FirstOrDefault(i => i.Id == key);
				if (record is null) return NotFound("Item not exists.");

				DbSet.Remove(record);
				DbContext.SaveChanges();
				return NoContent();

			} catch (Exception ex) {

				HandleException(ex);
				return BadRequest(ModelState);

			}

		}

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