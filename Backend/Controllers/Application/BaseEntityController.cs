using Microsoft.AspNetCore.OData.Query;
using Microsoft.AspNetCore.OData.Deltas;
using Microsoft.AspNetCore.OData.Results;
using Microsoft.AspNetCore.OData.Formatter;
using Microsoft.AspNetCore.OData.Routing.Attributes;
using Microsoft.AspNetCore.OData.Routing.Controllers;

namespace Hephaestus.Backend.Application.Controllers;

[ODataAttributeRouting]
public abstract class BaseEntityController<TEntity> : ODataController where TEntity : class, IEntity {

	// DbContext and DbSet
	protected readonly DatabaseContext DbContext;
	protected readonly DbSet<TEntity> DbSet;

	// Constructor
	public BaseEntityController(DatabaseContext context) {
		DbContext = context;
		DbSet = DbContext.Set<TEntity>();
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
	protected bool SoftDeletable = false;
	protected virtual (bool Success, string? Message) OnCreate(ref TEntity item, int? user) { return (true, null); }
	protected virtual (bool Success, string? Message) OnUpdate(ref TEntity item, TEntity record, int? user) { return (true, null); }
	protected virtual (bool Success, string? Message) OnDelete(ref TEntity item, int? user) { return (true, null); }
	protected virtual void OnCreated(TEntity item, int? user) { }
	protected virtual void OnUpdated(TEntity item, int? user) { }
	protected virtual void OnDeleted(TEntity item, int? user) { }

	// POST
	[HttpPost]
	public virtual async Task<IActionResult> PostAsync([FromBody] TEntity item, [FromQuery] int? user) {

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

	// GET All
	[HttpGet]
	[EnableQuery(AllowedQueryOptions = CollectionQueryOptions, MaxExpansionDepth = 5, MaxAnyAllExpressionDepth = 5, MaxNodeCount = 100, MaxOrderByNodeCount = 10)]
	public virtual ActionResult<IQueryable<TEntity>> Get() {

		try {

			var items = DbSet.AsNoTracking();
			return Ok(items);

		} catch (Exception ex) {

			HandleException(ex);
			return BadRequest(ModelState);

		}

	}

	// GET By Id
	[HttpGet]
	[EnableQuery(AllowedQueryOptions = SingleItemQueryOptions, MaxExpansionDepth = 5, MaxAnyAllExpressionDepth = 5)]
	public virtual ActionResult<SingleResult<TEntity>> Get(int key) {

		if (key < 0) return BadRequest("Ivalid key.");
		var result = GetBy(i => i.Id == key);
		return result;

	}

	// GET By Predicate
	protected virtual ActionResult<SingleResult<TEntity>> GetBy(System.Linq.Expressions.Expression<Func<TEntity, bool>> predicate) {

		try {

			var record = DbSet.AsNoTracking().Where(predicate).AsQueryable();
			return Ok(SingleResult.Create(record));

		} catch (Exception ex) {

			HandleException(ex);
			return BadRequest(ModelState);

		}

	}

	// PUT
	[HttpPut]
	public virtual async Task<IActionResult> PutAsync(int key, [FromBody] TEntity item, [FromQuery] int? user) {

		if (key < 0) return BadRequest("Ivalid key.");
		if (!ModelState.IsValid) return BadRequest(ModelState);
		var result = await PutByAsync(i => i.Id == key, item, user);
		return result;

	}

	// PUT By
	protected virtual async Task<ActionResult> PutByAsync(System.Linq.Expressions.Expression<Func<TEntity, bool>> predicate, TEntity item, int? user) {

		if (item == null) return BadRequest("Invalid data.");

		try {

			user ??= await GetUserAsync(user);
			var record = await DbSet.AsNoTracking().FirstOrDefaultAsync(predicate);

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
	public virtual async Task<IActionResult> PatchAsync(int key, [FromBody] Delta<TEntity> item, [FromQuery] int? user) {

		if (key <= 0) return BadRequest("Invalid key.");
		if (!ModelState.IsValid) return BadRequest(ModelState);
		var result = await PatchByAsync(i => i.Id == key, item, user);
		return result;

	}

	// PATCH By
	protected virtual async Task<IActionResult> PatchByAsync(System.Linq.Expressions.Expression<Func<TEntity, bool>> predicate, Delta<TEntity> item, int? user) {

		if (item == null) return BadRequest("Invalid data.");
		if (!item.GetChangedPropertyNames().Any()) return BadRequest("Invalid data.");

		try {

			var record = await DbSet.FirstOrDefaultAsync(predicate);
			if (record is null) return NotFound("Item not exists.");

			user ??= await GetUserAsync(user);
			var (success, message) = OnUpdate(ref record, record, user);
			if (!success) return BadRequest(message);

			item.TrySetPropertyValue("Id", record.Id);
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

		if (key <= 0) return BadRequest("Invalid key.");
		var result = await DeleteByAsync(i => i.Id == key, user);
		return result;

	}

	// DELETE By
	protected virtual async Task<IActionResult> DeleteByAsync(System.Linq.Expressions.Expression<Func<TEntity, bool>> predicate, int? user) {

		try {

			var record = await DbSet.FirstOrDefaultAsync(predicate);
			if (record is null) return NotFound("Item not exists.");

			user ??= await GetUserAsync(user);
			var (success, message) = OnDelete(ref record, user);
			if (!success) return BadRequest(message);

			if (SoftDeletable) {
				DbSet.Update(record);
			} else {
				DbSet.Remove(record);
			}

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