using Microsoft.AspNetCore.OData.Query;
using Microsoft.AspNetCore.OData.Deltas;
using Microsoft.AspNetCore.OData.Results;
using Microsoft.AspNetCore.OData.Formatter;
using Microsoft.AspNetCore.OData.Routing.Attributes;
using Microsoft.AspNetCore.OData.Routing.Controllers;

namespace Hephaestus.Backend.Controllers;

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
	protected bool SoftDeletable = false;

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

		try {

			if (item == null) return BadRequest("Invalid data.");
			if (!ModelState.IsValid) return BadRequest(ModelState);

			var (success, message) = OnCreate(ref item);
			if (!success) return BadRequest(message);
			await TraceCreationAsync(item, user);

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
				await TraceCreationAsync(item, user);

				DbSet.Add(item);
				await DbContext.SaveChangesAsync();
				OnCreated(item);

				return Created(item);

			} else {

				var (success, message) = OnUpdate(ref item);
				if (!success) return BadRequest(message);
				await TraceUpdateAsync(record, item, user);

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
			if (record is null) return NotFound("Item not exists.");

			var (success, message) = OnUpdate(ref record);
			if (!success) return BadRequest(message);
			await TraceUpdateAsync(record, user);

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
	protected virtual async Task<IActionResult> DeleteItemAsync(System.Linq.Expressions.Expression<Func<T, bool>> predicate, int? user) {

		if (!AllowDelete) return StatusCode(405);

		try {

			var record = await DbSet.FirstOrDefaultAsync(predicate);
			if (record is null) return NotFound("Item not exists.");

			var (success, message) = OnDelete(ref record);
			if (!success) return BadRequest(message);

			if (SoftDeletable) {

				await TraceDeletionAsync(record, user);
				DbSet.Update(record);

			} else {

				DbSet.Remove(record);

			}

			await DbContext.SaveChangesAsync();
			OnDeleted(record);

			return NoContent();

		} catch (Exception ex) {

			HandleException(ex);
			return BadRequest(ModelState);

		}

	}

	// Trace Creation
	protected async Task TraceCreationAsync(T item, int? user) {

		if (item == null) return;
		if (user is null or <= 0) user = await GetUserAsync();

		item.GetType().GetProperty("Id")?.SetValue(item, 0);
		item.GetType().GetProperty("CreatedBy")?.SetValue(item, user);
		item.GetType().GetProperty("CreatedOn")?.SetValue(item, DateTime.UtcNow);

	}

	// Trace Update
	protected async Task TraceUpdateAsync(T record, int? user) {

		if (record == null) return;
		if (user is null or <= 0) user = await GetUserAsync();

		record.GetType().GetProperty("UpdatedBy")?.SetValue(record, user);
		record.GetType().GetProperty("UpdatedOn")?.SetValue(record, DateTime.UtcNow);

	}

	// Trace Update
	protected async Task TraceUpdateAsync(T record, T item, int? user) {

		if (item == null) return;
		if (user is null or <= 0) user = await GetUserAsync();

		var id = (int)(record.GetType().GetProperty("Id")?.GetValue(record) ?? 0);

		item.GetType().GetProperty("Id")?.SetValue(item, id);
		item.GetType().GetProperty("UpdatedBy")?.SetValue(item, user);
		item.GetType().GetProperty("UpdatedOn")?.SetValue(item, DateTime.UtcNow);

	}

	// Trace Deletion
	protected async Task TraceDeletionAsync(T record, int? user) {

		if (record == null) return;
		if (user is null or <= 0) user = await GetUserAsync();

		record.GetType().GetProperty("Deleted")?.SetValue(record, true);
		record.GetType().GetProperty("DeletedBy")?.SetValue(record, user);
		record.GetType().GetProperty("DeletedOn")?.SetValue(record, DateTime.UtcNow);

	}

	// Get User
	protected async Task<int> GetUserAsync() {

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