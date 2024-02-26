using Microsoft.AspNetCore.OData.Query;
using Microsoft.AspNetCore.OData.Deltas;
using Microsoft.AspNetCore.OData.Results;
using Microsoft.AspNetCore.OData.Formatter;
using Microsoft.AspNetCore.OData.Routing.Attributes;
using Microsoft.AspNetCore.OData.Routing.Controllers;

namespace Hephaestus.Backend.Abstractions.Controllers;

[ODataAttributeRouting]
public abstract class BaseODataController<T> : ODataController where T : class {

	// DbContext and DbSet
	protected readonly DatabaseContext DbContext;
	protected readonly DbSet<T> DbSet;

	// Constructor
	public BaseODataController(DatabaseContext context) {

		DbContext = context;
		DbSet = DbContext.Set<T>();

	}

	// Query Options for Collections
	protected const AllowedQueryOptions CollectionQueryOptions = AllowedQueryOptions.Select | AllowedQueryOptions.Expand | AllowedQueryOptions.Filter | AllowedQueryOptions.OrderBy | AllowedQueryOptions.Count | AllowedQueryOptions.Top | AllowedQueryOptions.Skip | AllowedQueryOptions.SkipToken | AllowedQueryOptions.Search | AllowedQueryOptions.Apply | AllowedQueryOptions.Compute;

	// Query Options for Single Item
	protected const AllowedQueryOptions SingleItemQueryOptions = AllowedQueryOptions.Select | AllowedQueryOptions.Expand | AllowedQueryOptions.Compute;

	// Permissions Properties
	protected bool AllowPost = true;
	protected bool AllowPut = true;
	protected bool AllowPatch = true;
	protected bool AllowUpsert = true;
	protected bool AllowDelete = true;

	// Virtual Action Methods
	protected virtual (bool Success, string? Message) OnCreate(ref T item) { return (true, null); }
	protected virtual (bool Success, string? Message) OnUpdate(ref T item) { return (true, null); }
	protected virtual (bool Success, string? Message) OnDelete(ref T item) { return (true, null); }
	protected virtual void OnCreated(T item) { }
	protected virtual void OnUpdated(T item) { }
	protected virtual void OnDeleted(T item) { }

	// POST Item
	protected virtual async Task<IActionResult> PostItemAsync(T item, int? user) {

		if (!AllowPost) return StatusCode(405);
		if (item == null) return BadRequest("Invalid data.");
		if (!ModelState.IsValid) return BadRequest(ModelState);

		try {

			var (success, message) = OnCreate(ref item);
			if (!success) return BadRequest(message);

			user = await GetUserAsync(user);
			PrepareCreation(ref item, user);

			DbSet.Add(item);
			await DbContext.SaveChangesAsync();
			OnCreated(item);

			return Created(item);

		} catch (Exception ex) {

			HandleException(ex);
			return BadRequest(ModelState);

		}

	}

	// GET Items
	protected virtual ActionResult<IQueryable<T>> GetItems() {

		try {

			var items = DbSet.AsNoTracking();
			return Ok(items);

		} catch (Exception ex) {

			HandleException(ex);
			return BadRequest(ModelState);

		}

	}

	// GET Item
	protected virtual ActionResult<SingleResult<T>> GetItem(System.Linq.Expressions.Expression<Func<T, bool>> predicate) {

		try {

			var record = DbSet.AsNoTracking().Where(predicate);
			return Ok(SingleResult.Create(record));

		} catch (Exception ex) {

			HandleException(ex);
			return BadRequest(ModelState);

		}

	}

	// PUT Item
	protected virtual async Task<ActionResult> PutItemAsync(System.Linq.Expressions.Expression<Func<T, bool>> predicate, T item, int? user) {

		if (!AllowPut) return StatusCode(405);
		if (item == null) return BadRequest("Invalid data.");

		try {

			var record = await DbSet.AsNoTracking().FirstOrDefaultAsync(predicate);

			if (record == null) {

				if (!AllowUpsert) return StatusCode(405);
				var (success, message) = OnCreate(ref item);
				if (!success) return BadRequest(message);

				user = await GetUserAsync(user);
				PrepareCreation(ref item, user);

				DbSet.Add(item);
				await DbContext.SaveChangesAsync();
				OnCreated(item);

				return Created(item);

			} else {

				var (success, message) = OnUpdate(ref item);
				if (!success) return BadRequest(message);

				user = await GetUserAsync(user);
				PrepareUpdate(ref record, ref item, user);

				DbSet.Update(item);
				await DbContext.SaveChangesAsync();
				OnUpdated(item);

				return Ok(item);

			}

		} catch (Exception ex) {

			HandleException(ex);
			return BadRequest(ModelState);

		}

	}

	// PATCH Item
	protected virtual async Task<IActionResult> PatchItemAsync(System.Linq.Expressions.Expression<Func<T, bool>> predicate, Delta<T> item, int? user) {

		if (!AllowPatch) return StatusCode(405);
		if (item == null) return BadRequest("Invalid data.");
		if (!item.GetChangedPropertyNames().Any()) return BadRequest("Invalid data.");

		try {

			var record = await DbSet.FirstOrDefaultAsync(predicate);
			if (record is null) return NotFound("Item does not exist.");

			var (success, message) = OnUpdate(ref record);
			if (!success) return BadRequest(message);

			user = await GetUserAsync(user);
			PrepareUpdate(ref record, ref item, user);

			item.Patch(record);
			DbSet.Update(record);
			await DbContext.SaveChangesAsync();
			OnUpdated(record);

			return Ok(record);

		} catch (Exception ex) {

			HandleException(ex);
			return BadRequest(ModelState);

		}

	}

	// DELETE Item
	protected virtual async Task<IActionResult> DeleteItemAsync(System.Linq.Expressions.Expression<Func<T, bool>> predicate) {

		if (!AllowDelete) return StatusCode(405);

		try {

			var record = await DbSet.FirstOrDefaultAsync(predicate);
			if (record is null) return NotFound("Item does not exist.");

			var (success, message) = OnDelete(ref record);
			if (!success) return BadRequest(message);

			DbSet.Remove(record);
			await DbContext.SaveChangesAsync();
			OnDeleted(record);

			return NoContent();

		} catch (Exception ex) {

			HandleException(ex);
			return BadRequest(ModelState);

		}

	}

	// Prepare Creation
	protected virtual void PrepareCreation(ref T item, int? user) { }

	// Prepare Update
	protected virtual void PrepareUpdate(ref T record, ref Delta<T> item, int? user) { }

	// Prepare Update
	protected virtual void PrepareUpdate(ref T record, ref T item, int? user) { }

	// Get User
	protected async Task<int> GetUserAsync(int? user) {

		if (user is not null and > 0) return (int)user;
		var guid = User.FindFirst("http://schemas.microsoft.com/identity/claims/objectidentifier")?.Value;
		var record = await DbContext.Set<User>().AsNoTracking().FirstOrDefaultAsync(u => u.Guid == guid);
		return record?.Id ?? 1;

	}

	// Get Parameter
	protected static TParam? GetParameter<TParam>(ODataActionParameters parameters, string name) {

		return parameters.TryGetValue(name, out var value) && value is TParam t ? t : default;

	}

	// Exception Handling
	protected virtual void HandleException(Exception ex) {

		ModelState.AddModelError("exception", ex.Message);
		ModelState.AddModelError("innerexception", ex.InnerException?.Message ?? string.Empty);

	}

}