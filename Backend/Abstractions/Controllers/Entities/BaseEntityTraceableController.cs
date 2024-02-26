using Microsoft.AspNetCore.OData.Deltas;

namespace Hephaestus.Backend.Abstractions.Controllers;

public abstract class BaseEntityTraceableController<T>(DatabaseContext context) : BaseEntityController<T>(context) where T : class, IEntityTraceable {

	// Prepare Creation
	protected override void PrepareCreation(ref T item, int? user) {

		item.Id = 0;
		item.CreatedBy = user;
		item.CreatedOn = DateTime.UtcNow;
		item.UpdatedBy = user;
		item.UpdatedOn = DateTime.UtcNow;

	}

	// Prepare Update
	protected override void PrepareUpdate(ref T record, ref Delta<T> item, int? user) {

		item.TrySetPropertyValue("Id", record.Id);
		record.CreatedBy ??= user;
		record.CreatedOn ??= DateTime.UtcNow;
		record.UpdatedBy = user;
		record.UpdatedOn = DateTime.UtcNow;

	}

	// Prepare Update
	protected override void PrepareUpdate(ref T record, ref T item, int? user) {

		item.Id = record.Id;
		item.CreatedBy = record.CreatedBy ?? user;
		item.CreatedOn = record.CreatedOn ?? DateTime.UtcNow;
		item.UpdatedBy = user;
		item.UpdatedOn = DateTime.UtcNow;

	}

}