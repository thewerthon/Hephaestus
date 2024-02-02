using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.OData.Deltas;
using Microsoft.AspNetCore.OData.Query;
using Microsoft.AspNetCore.OData.Routing.Attributes;
using Microsoft.AspNetCore.OData.Routing.Controllers;
using Microsoft.EntityFrameworkCore;
using Hephaestus.Architect.Interfaces;
using Hephaestus.Backend.Database;

namespace Hephaestus.Backend.Controllers {

	[ODataAttributeRouting]
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
			AllowedQueryOptions.Select | AllowedQueryOptions.Expand | AllowedQueryOptions.Filter | AllowedQueryOptions.OrderBy |
			AllowedQueryOptions.Count | AllowedQueryOptions.Top | AllowedQueryOptions.Skip | AllowedQueryOptions.SkipToken |
			AllowedQueryOptions.Search | AllowedQueryOptions.Apply | AllowedQueryOptions.Compute | AllowedQueryOptions.Format;

		// Query Options for Single Item
		private const AllowedQueryOptions SingleItemQueryOptions =
			AllowedQueryOptions.Select | AllowedQueryOptions.Expand | AllowedQueryOptions.Compute | AllowedQueryOptions.Format;

		// Constructor
		public BaseController(DatabaseContext context) {
			DbContext = context;
			DbSet = DbContext.Set<T>();
		}

		// Virtual Action Methods
		protected virtual void OnCreate(ref T item) { }
		protected virtual void OnCreated(ref T item) { }
		protected virtual void OnRead(ref T item) { }
		protected virtual void OnUpdate(ref T item) { }
		protected virtual void OnUpdated(ref T item) { }
		protected virtual void OnDelete(ref T item) { }
		protected virtual void OnDeleted(ref T item) { }
		protected virtual void OnList(ref IQueryable<T> items) { }

		[HttpPost] // POST Item Method
		[EnableQuery(AllowedQueryOptions = SingleItemQueryOptions, MaxExpansionDepth = 10, MaxAnyAllExpressionDepth = 10, MaxNodeCount = 1000)]
		public virtual IActionResult Post([FromBody] T item, [FromQuery] bool response = true) {

			try {

				if (!AllowPost) return StatusCode(405);
				if (item == null) return BadRequest("Item cannot be null.");
				if (item.Id != 0) return BadRequest("Id must be 0 for new items.");
				if (!ModelState.IsValid) return BadRequest(ModelState);

				OnCreate(ref item);
				DbSet.Add(item);
				DbContext.SaveChanges();
				OnCreated(ref item);

				if (!response) return Ok();
				var result = DbSet.Find(item.Id);
				return Ok(result);

			} catch (Exception ex) {

				HandleException(ex);
				return BadRequest(ModelState);

			}

		}

		[HttpGet] // GET Item Method
		[EnableQuery(AllowedQueryOptions = SingleItemQueryOptions, MaxExpansionDepth = 10, MaxAnyAllExpressionDepth = 10, MaxNodeCount = 1000)]
		public virtual ActionResult<T> Get(int key) {

			if (!AllowGet) return StatusCode(405, null);
			if (key <= 0) return BadRequest("Ivalid key.");

			var item = DbSet.AsNoTracking().FirstOrDefault(i => i.Id == key);
			if (item == null) return NotFound("Item not found.");

			OnRead(ref item);
			return Ok(item);

		}

		[HttpPut] // PUT Item Method
		[EnableQuery(AllowedQueryOptions = SingleItemQueryOptions, MaxExpansionDepth = 10, MaxAnyAllExpressionDepth = 10, MaxNodeCount = 1000)]
		public virtual IActionResult Put(int key, [FromBody] T item, [FromQuery] bool response = true) {

			try {

				if (!AllowPut) return StatusCode(405);
				if (key <= 0) return BadRequest("Ivalid key.");
				if (item == null) return BadRequest("Item cannot be null.");
				if (item.Id != key) return BadRequest("Key must match item id.");
				if (!ModelState.IsValid) return BadRequest(ModelState);

				var check = DbSet.AsNoTracking().FirstOrDefault(i => i.Id == key);
				if (check == null) return NotFound("Item not found.");

				OnUpdate(ref item);
				DbSet.Update(item);
				DbContext.SaveChanges();
				OnUpdated(ref item);

				if (!response) return Ok();
				var result = DbSet.Find(key);
				return Ok(result);

			} catch (Exception ex) {

				HandleException(ex);
				return BadRequest(ModelState);

			}

		}

		[HttpPatch] // PATCH Item Method
		[EnableQuery(AllowedQueryOptions = SingleItemQueryOptions, MaxExpansionDepth = 10, MaxAnyAllExpressionDepth = 10, MaxNodeCount = 1000)]
		public virtual IActionResult Patch(int key, [FromBody] Delta<T> patch, [FromQuery] bool response = true) {

			try {

				if (!AllowPatch) return StatusCode(405);
				if (key <= 0) return BadRequest("Ivalid key.");
				if (patch == null) return BadRequest("Data cannot be null.");
				if (!patch.GetChangedPropertyNames().Any()) return BadRequest("Data cannot be empty.");
				if (!ModelState.IsValid) return BadRequest(ModelState);

				var item = DbSet.FirstOrDefault(i => i.Id == key);
				if (item == null) return NotFound("Item not found.");

				patch.Patch(item);
				OnUpdate(ref item);
				DbSet.Update(item);
				DbContext.SaveChanges();
				OnUpdated(ref item);

				if (!response) return Ok();
				var result = DbSet.Find(key);
				return Ok(result);

			} catch (Exception ex) {

				HandleException(ex);
				return BadRequest(ModelState);

			}

		}

		[HttpDelete] // DELETE Item Method
		public virtual IActionResult Delete(int key) {

			try {

				if (!AllowDelete) return StatusCode(405);
				if (key <= 0) return BadRequest("Ivalid key.");
				if (!ModelState.IsValid) return BadRequest(ModelState);

				var item = DbSet.FirstOrDefault(i => i.Id == key);
				if (item == null) return NotFound("Item not found.");

				OnDelete(ref item);
				DbSet.Remove(item);
				DbContext.SaveChanges();
				OnDeleted(ref item);

				return Ok();

			} catch (Exception ex) {

				HandleException(ex);
				return BadRequest(ModelState);

			}

		}

		[HttpGet] // GET List Method
		[EnableQuery(AllowedQueryOptions = CollectionQueryOptions, MaxExpansionDepth = 10, MaxAnyAllExpressionDepth = 10, MaxNodeCount = 1000)]
		public virtual ActionResult<IQueryable<T>> Get() {

			if (!AllowList) return StatusCode(405);
			var items = DbSet.AsNoTracking().AsQueryable();

			OnList(ref items);
			return Ok(items);

		}

		// Exception Handling
		protected virtual void HandleException(Exception ex) {

			ModelState.AddModelError("exception", ex.Message);
			ModelState.AddModelError("innerexception", ex.InnerException?.Message ?? string.Empty);

		}

	}

}