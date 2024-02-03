using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.OData.Deltas;
using Microsoft.AspNetCore.OData.Query;
using Microsoft.AspNetCore.OData.Results;
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
		protected bool AllowUpsert = false;
		protected bool AllowList = true;

		// DbContext and DbSet
		internal readonly DatabaseContext DbContext;
		internal readonly DbSet<T> DbSet;

		// Query Options for Collections
		internal const AllowedQueryOptions CollectionQueryOptions =
			AllowedQueryOptions.Select | AllowedQueryOptions.Expand | AllowedQueryOptions.Filter | AllowedQueryOptions.OrderBy |
			AllowedQueryOptions.Count | AllowedQueryOptions.Top | AllowedQueryOptions.Skip | AllowedQueryOptions.SkipToken |
			AllowedQueryOptions.Search | AllowedQueryOptions.Apply | AllowedQueryOptions.Compute;

		// Query Options for Single Item
		internal const AllowedQueryOptions SingleItemQueryOptions =
			AllowedQueryOptions.Select | AllowedQueryOptions.Expand | AllowedQueryOptions.Compute;

		// Constructor
		public BaseController(DatabaseContext context) {
			DbContext = context;
			DbSet = DbContext.Set<T>();
		}

		// Virtual Action Methods
		internal string ResponseMessage = string.Empty;
		protected virtual void OnRead(ref SingleResult<T> item) { }
		protected virtual void OnList(ref IQueryable<T> items) { }
		protected virtual bool BeforeCreate(ref T item) { return true; }
		protected virtual bool BeforeUpdate(ref T item) { return true; }
		protected virtual bool BeforeDelete(ref T item) { return true; }
		protected virtual void OnCreated(ref T item) { }
		protected virtual void OnUpdated(ref T item) { }
		protected virtual void OnDeleted(ref T item) { }

		[HttpPost] // POST Item Method
		[EnableQuery(AllowedQueryOptions = SingleItemQueryOptions, MaxExpansionDepth = 5, MaxAnyAllExpressionDepth = 5, MaxNodeCount = 100, MaxOrderByNodeCount = 10)]
		public virtual IActionResult Post([FromBody] T item, [FromQuery] bool response = true) {

			try {

				if (!AllowPost) return StatusCode(405);
				if (item == null) return BadRequest("Item cannot be null.");
				if (item.Id != 0) return BadRequest("Id must be 0 for new items.");
				if (!ModelState.IsValid) return BadRequest(ModelState);
				if (!BeforeCreate(ref item)) return BadRequest(ResponseMessage);

				DbSet.Add(item);
				DbContext.SaveChanges();

				OnCreated(ref item);
				if (!response) return Ok();

				var result = DbSet.Where(i => i.Id == item.Id);
				return Ok(SingleResult.Create(result));

			} catch (Exception ex) {

				HandleException(ex);
				return BadRequest(ModelState);

			}

		}

		[HttpGet] // GET List Method
		[EnableQuery(AllowedQueryOptions = CollectionQueryOptions, MaxExpansionDepth = 5, MaxAnyAllExpressionDepth = 5, MaxNodeCount = 100, MaxOrderByNodeCount = 10)]
		public virtual ActionResult<IQueryable<T>> Get() {

			if (!AllowList) return StatusCode(405);
			var items = DbSet.AsNoTracking().AsQueryable();

			OnList(ref items);
			return Ok(items);

		}

		[HttpGet] // GET Item Method
		[EnableQuery(AllowedQueryOptions = SingleItemQueryOptions, MaxExpansionDepth = 5, MaxAnyAllExpressionDepth = 5, MaxNodeCount = 100, MaxOrderByNodeCount = 10)]
		public virtual ActionResult<SingleResult<T>> Get(int key) {

			if (!AllowGet) return StatusCode(405);
			if (key <= 0) return BadRequest();

			var item = DbSet.AsNoTracking().Where(i => i.Id == key);
			var result = SingleResult.Create(item);

			OnRead(ref result);
			return Ok(result);

		}

		[HttpPut] // PUT Item Method
		[EnableQuery(AllowedQueryOptions = SingleItemQueryOptions, MaxExpansionDepth = 5, MaxAnyAllExpressionDepth = 5, MaxNodeCount = 100, MaxOrderByNodeCount = 10)]
		public virtual IActionResult Put(int key, [FromBody] T item, [FromQuery] bool upsert = false, [FromQuery] bool response = true) {

			try {

				if (!AllowPut) return StatusCode(405);
				if (!AllowUpsert && upsert) return StatusCode(405);

				if (key < 0 && upsert) return BadRequest("Ivalid key.");
				if (key <= 0 && !upsert) return BadRequest("Ivalid key.");
				if (item == null) return BadRequest("Item cannot be null.");
				if (item.Id != key) return BadRequest("Key must match item id.");
				if (!ModelState.IsValid) return BadRequest(ModelState);

				var insert = false;
				var check = DbSet.AsNoTracking().Where(i => i.Id == item.Id).FirstOrDefault();
				if (check == null && !upsert) return NotFound("Item not found.");
				if (check == null && upsert) insert = true;

				if (insert) {

					if (!BeforeCreate(ref item))
						return BadRequest(ResponseMessage);

					DbSet.Add(item);
					DbContext.SaveChanges();
					OnCreated(ref item);

				} else {

					if (!BeforeUpdate(ref item))
						return BadRequest(ResponseMessage);

					DbSet.Update(item);
					DbContext.SaveChanges();
					OnUpdated(ref item);

				}

				if (!response) return Ok();

				var result = DbSet.Where(i => i.Id == item.Id);
				return Ok(SingleResult.Create(result));

			} catch (Exception ex) {

				HandleException(ex);
				return BadRequest(ModelState);

			}

		}

		[HttpPatch] // PATCH Item Method
		[EnableQuery(AllowedQueryOptions = SingleItemQueryOptions, MaxExpansionDepth = 5, MaxAnyAllExpressionDepth = 5, MaxNodeCount = 100, MaxOrderByNodeCount = 10)]
		public virtual IActionResult Patch(int key, [FromBody] Delta<T> item, [FromQuery] bool response = true) {

			try {

				if (!AllowPatch) return StatusCode(405);
				if (key <= 0) return BadRequest("Ivalid key.");
				if (item == null) return BadRequest("Data cannot be null.");
				if (!item.GetChangedPropertyNames().Any()) return BadRequest("Data cannot be empty.");
				if (!ModelState.IsValid) return BadRequest(ModelState);

				var check = DbSet.Where(i => i.Id == key).FirstOrDefault();
				if (check == null) return NotFound("Item not found.");

				item.Patch(check);
				if (!BeforeUpdate(ref check)) return BadRequest(ResponseMessage);

				DbSet.Update(check);
				DbContext.SaveChanges();

				OnUpdated(ref check);
				if (!response) return Ok();

				var result = DbSet.Where(i => i.Id == key);
				return Ok(SingleResult.Create(result));

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

				var item = DbSet.Where(i => i.Id == key).FirstOrDefault();
				if (item == null) return NotFound("Item not found.");
				if (!BeforeDelete(ref item)) return BadRequest(ResponseMessage);

				DbSet.Remove(item);
				DbContext.SaveChanges();

				OnDeleted(ref item);
				return Ok();

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