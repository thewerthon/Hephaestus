using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.OData.Deltas;
using Microsoft.AspNetCore.OData.Query;
using Microsoft.AspNetCore.OData.Results;
using Microsoft.AspNetCore.OData.Routing.Controllers;
using Microsoft.EntityFrameworkCore;
using Hephaestus.Architect.Interfaces;
using Hephaestus.Backend.Database;

namespace Hephaestus.Backend.Controllers {

	[ApiController]
	public abstract class BaseController<T> : ODataController where T : class, IRecord {

		// Controller Permissions
		protected bool AllowPost = true;
		protected bool AllowGet = true;
		protected bool AllowPut = true;
		protected bool AllowPatch = true;
		protected bool AllowDelete = true;
		protected bool AllowList = true;

		// DbContext and DbSet
		private readonly DatabaseContext DbContext;
		private readonly DbSet<T> DbSet;

		// Query Options for Collections
		private const AllowedQueryOptions CollectionQueryOptions =
			AllowedQueryOptions.Apply | AllowedQueryOptions.Select | AllowedQueryOptions.Expand | AllowedQueryOptions.Filter |
			AllowedQueryOptions.OrderBy | AllowedQueryOptions.Count | AllowedQueryOptions.Top | AllowedQueryOptions.SkipToken |
			AllowedQueryOptions.Skip | AllowedQueryOptions.Format | AllowedQueryOptions.Search | AllowedQueryOptions.Compute;

		// Query Options for Single Item
		private const AllowedQueryOptions SingleItemQueryOptions =
			AllowedQueryOptions.Select | AllowedQueryOptions.Expand | AllowedQueryOptions.Format;

		// Constructor
		public BaseController(DatabaseContext context) {
			DbContext = context;
			DbSet = DbContext.Set<T>();
		}

		// Virtual Action Methods
		protected virtual void OnCreate(T item) { }
		protected virtual void OnCreated(T item) { }
		protected virtual void OnRead(ref SingleResult<T> item) { }
		protected virtual void OnUpdate(T item) { }
		protected virtual void OnUpdated(T item) { }
		protected virtual void OnDelete(T item) { }
		protected virtual void OnDeleted(T item) { }
		protected virtual void OnList(ref IQueryable<T> items) { }

		// POST Item Method
		[HttpPost("")]
		[EnableQuery(AllowedQueryOptions = SingleItemQueryOptions, MaxExpansionDepth = 10, MaxAnyAllExpressionDepth = 10, MaxNodeCount = 1000)]
		public virtual IActionResult PostItem([FromBody] T item, [FromQuery] bool response = true) {

			try {

				if (!AllowPost) return StatusCode(405);
				if (item == null) return BadRequest("Item cannot be null.");
				if (item.Id != 0) return BadRequest("Id must be 0 for new records.");
				if (!ModelState.IsValid) return BadRequest(ModelState);

				OnCreate(item);
				DbSet.Add(item);
				DbContext.SaveChanges();
				OnCreated(item);

				if (!response) return Ok();
				var result = DbSet.Where(i => i.Id == item.Id);
				return new ObjectResult(SingleResult.Create(result)) { StatusCode = 201 };

			} catch (Exception ex) {

				HandleException(ex);
				return BadRequest(ModelState);

			}

		}

		// GET List Method
		[HttpGet("")]
		[EnableQuery(AllowedQueryOptions = CollectionQueryOptions, MaxExpansionDepth = 10, MaxAnyAllExpressionDepth = 10, MaxNodeCount = 1000)]
		public virtual ActionResult<IQueryable<T>> GetItems() {

			if (!AllowList) return StatusCode(405);

			var items = DbSet.AsNoTracking().AsQueryable();
			OnList(ref items);
			return Ok(items);

		}

		// GET Item Method
		[HttpGet("{id}")]
		[EnableQuery(AllowedQueryOptions = SingleItemQueryOptions, MaxExpansionDepth = 10, MaxAnyAllExpressionDepth = 10, MaxNodeCount = 1000)]
		public virtual ActionResult<SingleResult<T>> GetItem(int id) {

			if (!AllowGet) return StatusCode(405);
			if (id <= 0) return BadRequest("Ivalid id.");

			var item = DbSet.AsNoTracking().Where(i => i.Id == id);
			var result = SingleResult.Create(item);
			return Ok(result);

		}

		// PUT Item Method
		[HttpPut("{id}")]
		[EnableQuery(AllowedQueryOptions = SingleItemQueryOptions, MaxExpansionDepth = 10, MaxAnyAllExpressionDepth = 10, MaxNodeCount = 1000)]
		public virtual IActionResult PutItem(int id, [FromBody] T item, [FromQuery] bool response = true) {

			try {

				if (!AllowPut) return StatusCode(405);
				if (id <= 0) return BadRequest("Ivalid id.");
				if (item == null) return BadRequest("Item cannot be null.");
				if (item.Id != id) return BadRequest("Id must match item.Id.");
				if (!ModelState.IsValid) return BadRequest(ModelState);

				OnUpdate(item);
				DbSet.Update(item);
				DbContext.SaveChanges();
				OnUpdated(item);

				if (!response) return Ok();
				var result = DbSet.Where(i => i.Id == id);
				return new ObjectResult(SingleResult.Create(result));

			} catch (Exception ex) {

				HandleException(ex);
				return BadRequest(ModelState);

			}

		}

		// PATCH Item Method
		[HttpPatch("{id}")]
		[EnableQuery(AllowedQueryOptions = SingleItemQueryOptions, MaxExpansionDepth = 10, MaxAnyAllExpressionDepth = 10, MaxNodeCount = 1000)]
		public virtual IActionResult PatchItem(int id, [FromBody] Delta<T> patch, [FromQuery] bool response = true) {

			try {

				if (!AllowPatch) return StatusCode(405);
				if (id <= 0) return BadRequest("Ivalid id.");
				if (patch == null) return BadRequest("Data cannot be null.");
				if (!patch.GetChangedPropertyNames().Any()) return BadRequest("Data cannot be empty.");
				if (!ModelState.IsValid) return BadRequest(ModelState);

				var item = DbSet.Where(i => i.Id == id).FirstOrDefault();
				if (item == null) return NotFound("Item not found.");

				patch.Patch(item);
				OnUpdate(item);
				DbSet.Update(item);
				DbContext.SaveChanges();
				OnUpdated(item);

				if (!response) return Ok();
				var result = DbSet.Where(i => i.Id == id);
				return new ObjectResult(SingleResult.Create(result));

			} catch (Exception ex) {

				HandleException(ex);
				return BadRequest(ModelState);

			}

		}

		// DELETE Item Method
		[HttpDelete("{id}")]
		public virtual IActionResult DeleteItem(int id) {

			try {

				if (!AllowDelete) return StatusCode(405);
				if (id <= 0) return BadRequest("Ivalid id.");
				if (!ModelState.IsValid) return BadRequest(ModelState);

				var item = DbSet.Where(i => i.Id == id).FirstOrDefault();
				if (item == null) return NotFound("Item not found.");

				OnDelete(item);
				DbSet.Remove(item);
				DbContext.SaveChanges();
				OnDeleted(item);

				return new NoContentResult();

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