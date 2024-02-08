﻿using Microsoft.AspNetCore.OData.Query;
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

		// Controller Permissions
		protected bool AllowPost = false;
		protected bool AllowGet = false;
		protected bool AllowPut = false;
		protected bool AllowPatch = false;
		protected bool AllowDelete = false;
		protected bool AllowUpsert = false;
		protected bool AllowList = false;

		// Query Options for Collections
		protected const AllowedQueryOptions CollectionQueryOptions =
			AllowedQueryOptions.Select | AllowedQueryOptions.Expand | AllowedQueryOptions.Filter | AllowedQueryOptions.OrderBy |
			AllowedQueryOptions.Count | AllowedQueryOptions.Top | AllowedQueryOptions.Skip | AllowedQueryOptions.SkipToken |
			AllowedQueryOptions.Search | AllowedQueryOptions.Apply | AllowedQueryOptions.Compute;

		// Query Options for Single Item
		protected const AllowedQueryOptions SingleItemQueryOptions =
			AllowedQueryOptions.Select | AllowedQueryOptions.Expand | AllowedQueryOptions.Compute;

		// Virtual Action Methods
		protected string ResponseMessage = string.Empty;
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
		public virtual IActionResult Post([FromBody] T item) {

			try {

				if (!AllowPost) return StatusCode(405);
				if (item == null) return BadRequest("Item cannot be null.");
				if (item.Id != 0) return BadRequest("Id must be 0 for new items.");
				if (!ModelState.IsValid) return BadRequest(ModelState);

				if (!BeforeCreate(ref item))
					return BadRequest(ResponseMessage);

				DbSet.Add(item);
				DbContext.SaveChanges();

				OnCreated(ref item);
				return Ok(item);

			} catch (Exception ex) {

				HandleException(ex);
				return BadRequest(ModelState);

			}

		}

		[HttpGet] // GET List Method
		[EnableQuery(AllowedQueryOptions = CollectionQueryOptions, MaxExpansionDepth = 5, MaxAnyAllExpressionDepth = 5, MaxNodeCount = 100, MaxOrderByNodeCount = 10)]
		public virtual ActionResult<IQueryable<T>> Get() {

			try {

				if (!AllowList) return StatusCode(405);
				var items = DbSet.AsNoTracking().AsQueryable();

				OnList(ref items);
				return Ok(items);

			} catch (Exception ex) {

				HandleException(ex);
				return BadRequest(ModelState);

			}

		}

		[HttpGet] // GET Item Method
		[EnableQuery(AllowedQueryOptions = SingleItemQueryOptions, MaxExpansionDepth = 5, MaxAnyAllExpressionDepth = 5, MaxNodeCount = 100, MaxOrderByNodeCount = 10)]
		public virtual ActionResult<SingleResult<T>> Get(int key) {

			try {

				if (!AllowGet) return StatusCode(405);
				if (key <= 0) return BadRequest();

				var item = DbSet.AsNoTracking().Where(i => i.Id == key);

				if (item.Any()) {

					var result = SingleResult.Create(item);
					OnRead(ref result);
					return Ok(result);

				} else {

					return Ok(null);

				}

			} catch (Exception ex) {

				HandleException(ex);
				return BadRequest(ModelState);

			}

		}

		[HttpPut] // PUT Item Method
		[EnableQuery(AllowedQueryOptions = SingleItemQueryOptions, MaxExpansionDepth = 5, MaxAnyAllExpressionDepth = 5, MaxNodeCount = 100, MaxOrderByNodeCount = 10)]
		public virtual IActionResult Put(int key, [FromBody] T item, [FromQuery] bool upsert = false) {

			try {

				if (!AllowPut) return StatusCode(405);
				if (!AllowUpsert && upsert) return StatusCode(405);

				if (key < 0 && upsert) return BadRequest("Ivalid key.");
				if (key <= 0 && !upsert) return BadRequest("Ivalid key.");
				if (item == null) return BadRequest("Item cannot be null.");
				if (item.Id != key) return BadRequest("Key must match item id.");
				if (!ModelState.IsValid) return BadRequest(ModelState);

				var insert = false;
				var exists = DbSet.AsNoTracking().Any(i => i.Id == item.Id);
				if (!exists && !upsert) return NotFound("Item not found.");
				if (!exists && upsert) insert = true;

				if (insert) {

					if (!BeforeCreate(ref item))
						return BadRequest(ResponseMessage);

					item.Id = 0;
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

				return Ok(item);

			} catch (Exception ex) {

				HandleException(ex);
				return BadRequest(ModelState);

			}

		}

		[HttpPatch] // PATCH Item Method
		[EnableQuery(AllowedQueryOptions = SingleItemQueryOptions, MaxExpansionDepth = 5, MaxAnyAllExpressionDepth = 5, MaxNodeCount = 100, MaxOrderByNodeCount = 10)]
		public virtual IActionResult Patch(int key, [FromBody] Delta<T> item) {

			try {

				if (!AllowPatch) return StatusCode(405);
				if (key <= 0) return BadRequest("Ivalid key.");
				if (item == null) return BadRequest("Data cannot be null.");
				if (!item.GetChangedPropertyNames().Any()) return BadRequest("Data cannot be empty.");
				if (!ModelState.IsValid) return BadRequest(ModelState);

				var i = DbSet.Where(i => i.Id == key).FirstOrDefault();
				if (i == null) return NotFound("Item not found.");

				item.Patch(i);
				if (!BeforeUpdate(ref i))
					return BadRequest(ResponseMessage);

				DbSet.Update(i);
				DbContext.SaveChanges();

				OnUpdated(ref i);
				return Ok(i);

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