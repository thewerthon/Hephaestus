using Microsoft.AspNetCore.OData.Deltas;
using Microsoft.AspNetCore.OData.Query;
using Microsoft.AspNetCore.OData.Results;

namespace Hephaestus.Backend.Abstractions.Controllers;

public abstract class BaseEntityController<T>(DatabaseContext context) : BaseODataController<T>(context) where T : class, IEntity {

	// POST
	[HttpPost]
	public virtual async Task<IActionResult> PostAsync([FromBody] T item, [FromQuery] int? user) {

		if (!ModelState.IsValid) return BadRequest(ModelState);
		var result = await PostItemAsync(item, user);
		return result;

	}

	// GET All
	[HttpGet]
	[EnableQuery(AllowedQueryOptions = CollectionQueryOptions, MaxExpansionDepth = 5, MaxAnyAllExpressionDepth = 5, MaxNodeCount = 100, MaxOrderByNodeCount = 10)]
	public virtual ActionResult<IQueryable<T>> Get() {

		var result = GetItems();
		return result;

	}

	// GET By Id
	[HttpGet]
	[EnableQuery(AllowedQueryOptions = SingleItemQueryOptions, MaxExpansionDepth = 5, MaxAnyAllExpressionDepth = 5)]
	public virtual ActionResult<SingleResult<T>> Get([FromRoute] int key) {

		if (key < 0) return BadRequest("Ivalid key.");
		var result = GetItem(i => i.Id == key);
		return result;

	}

	// PUT By Id
	[HttpPut]
	public virtual async Task<IActionResult> PutAsync([FromRoute] int key, [FromBody] T item, [FromQuery] int? user) {

		if (key < 0) return BadRequest("Ivalid key.");
		if (!ModelState.IsValid) return BadRequest(ModelState);
		var result = await PutItemAsync(i => i.Id == key, item, user);
		return result;

	}

	// PATCH By Id
	[HttpPatch]
	public virtual async Task<IActionResult> PatchAsync([FromRoute] int key, [FromBody] Delta<T> item, [FromQuery] int? user) {

		if (key <= 0) return BadRequest("Invalid key.");
		if (!ModelState.IsValid) return BadRequest(ModelState);
		var result = await PatchItemAsync(i => i.Id == key, item, user);
		return result;

	}

	// DELETE By Id
	[HttpDelete]
	public virtual async Task<IActionResult> DeleteAsync([FromRoute] int key) {

		if (key <= 0) return BadRequest("Invalid key.");
		var result = await DeleteItemAsync(i => i.Id == key);
		return result;

	}

	// Prepare Creation
	protected override void PrepareCreation(ref T item, int? user) {

		item.Id = 0;

	}

	// Prepare Update
	protected override void PrepareUpdate(ref T record, ref Delta<T> item, int? user) {

		item.TrySetPropertyValue("Id", record.Id);

	}

	// Prepare Update
	protected override void PrepareUpdate(ref T record, ref T item, int? user) {

		item.Id = record.Id;

	}

}