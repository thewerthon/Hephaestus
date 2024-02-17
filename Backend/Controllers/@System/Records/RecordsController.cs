using Microsoft.AspNetCore.OData.Query;
using Microsoft.AspNetCore.OData.Deltas;
using Microsoft.AspNetCore.OData.Results;
using Microsoft.AspNetCore.OData.Formatter;
using Microsoft.AspNetCore.OData.Routing.Attributes;
using Microsoft.AspNetCore.OData.Routing.Controllers;

namespace Hephaestus.Backend.Controllers {

	[ODataAttributeRouting]
	public abstract class RecordsController<T> : ODataController where T : class, IRecord {

		// DbContext and DbSet
		protected readonly DatabaseContext DbContext;
		protected readonly DbSet<T> DbSet;

		// Constructor
		public RecordsController(DatabaseContext context) {
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

		// Virtual Action Methods
		protected string ResponseMessage = string.Empty;
		protected virtual (bool Success, string? Message) OnCreate(ref T item, int? user) { return (true, null); }
		protected virtual (bool Success, string? Message) OnUpdate(ref T item, T record, int? user) { return (true, null); }
		protected virtual (bool Success, string? Message) OnDelete(ref T item, int? user) { return (true, null); }
		protected virtual void OnCreated(T item, int? user) { }
		protected virtual void OnUpdated(T item, int? user) { }
		protected virtual void OnDeleted(T item, int? user) { }

		// POST
		[HttpPost]
		public virtual async Task<IActionResult> PostAsync([FromBody] T item, [FromQuery] int? user) {

			try {

				if (item == null) return BadRequest("Invalid data.");
				if (!ModelState.IsValid) return BadRequest(ModelState);

				user ??= await GetUserAsync(user);
				var (success, message) = OnCreate(ref item, user);
				if (!success) return BadRequest(message);

				item.Id = 0;
				DbSet.Add(item);
				await DbContext.SaveChangesAsync();
				OnCreated(item, user);

				return Created(item);

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

				var items = DbSet.AsNoTracking();
				return Ok(items);

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
				var record = DbSet.AsNoTracking().Where(i => i.Id == key);
				return Ok(SingleResult.Create(record));

			} catch (Exception ex) {

				HandleException(ex);
				return BadRequest(ModelState);

			}

		}

		// PUT
		[HttpPut]
		public virtual async Task<IActionResult> PutAsync(int key, [FromBody] T item, [FromQuery] int? user) {

			try {

				if (key < 0) return BadRequest("Ivalid key.");
				if (item == null) return BadRequest("Invalid data.");
				if (!ModelState.IsValid) return BadRequest(ModelState);

				user ??= await GetUserAsync(user);
				var record = await DbSet.AsNoTracking().FirstOrDefaultAsync(i => i.Id == key);

				if (record == null) {

					var (success, message) = OnCreate(ref item, user);
					if (!success) return BadRequest(message);

					item.Id = 0;
					DbSet.Add(item);
					await DbContext.SaveChangesAsync();
					OnCreated(item, user);

					return Created(item);

				} else {

					var (success, message) = OnUpdate(ref item, record, user);
					if (!success) return BadRequest(message);

					item.Id = record.Id;
					DbSet.Update(item);
					await DbContext.SaveChangesAsync();
					OnUpdated(item, user);

					return Ok(item);

				}

			} catch (Exception ex) {

				HandleException(ex);
				return BadRequest(ModelState);

			}

		}

		// PATCH
		[HttpPatch]
		public virtual async Task<IActionResult> PatchAsync(int key, [FromBody] Delta<T> item, [FromQuery] int? user) {

			try {

				if (key <= 0) return BadRequest("Invalid key.");
				if (item == null) return BadRequest("Invalid data.");
				if (!item.GetChangedPropertyNames().Any()) return BadRequest("Invalid data.");
				if (!ModelState.IsValid) return BadRequest(ModelState);

				var record = await DbSet.FirstOrDefaultAsync(i => i.Id == key);
				if (record is null) return NotFound("Item not exists.");

				user ??= await GetUserAsync(user);
				var (success, message) = OnUpdate(ref record, record, user);
				if (!success) return BadRequest(message);

				item.TrySetPropertyValue("Id", key);
				item.Patch(record);

				DbSet.Update(record);
				await DbContext.SaveChangesAsync();
				OnUpdated(record, user);

				return Ok(record);

			} catch (Exception ex) {

				HandleException(ex);
				return BadRequest(ModelState);

			}

		}

		// DELETE
		[HttpDelete]
		public virtual async Task<IActionResult> DeleteAsync(int key, [FromQuery] int? user) {

			try {

				if (key <= 0) return BadRequest("Invalid key.");
				var record = await DbSet.FirstOrDefaultAsync(i => i.Id == key);
				if (record is null) return NotFound("Item not exists.");

				user ??= await GetUserAsync(user);
				var (success, message) = OnDelete(ref record, user);
				if (!success) return BadRequest(message);

				DbSet.Remove(record);
				await DbContext.SaveChangesAsync();
				OnDeleted(record, user);

				return NoContent();

			} catch (Exception ex) {

				HandleException(ex);
				return BadRequest(ModelState);

			}

		}

		// Get User
		protected async Task<int?> GetUserAsync(int? user) {

			if (user is not null and > 0) return user;
			var guid = User.FindFirst("http://schemas.microsoft.com/identity/claims/objectidentifier")?.Value;
			var record = await DbContext.Set<User>().AsNoTracking().FirstOrDefaultAsync(u => u.Guid == guid);
			return record?.Id;

		}

		// Get Parameters
		protected static TParam? GetParameter<TParam>(ODataActionParameters parameters, string name) {

			return parameters.TryGetValue(name, out var value) && value is TParam t ? t : default;

		}

		// Exception Handling
		protected virtual void HandleException(Exception ex) {

			ModelState.AddModelError("exception", ex.Message);
			ModelState.AddModelError("innerexception", ex.InnerException?.Message ?? string.Empty);

		}

	}

}