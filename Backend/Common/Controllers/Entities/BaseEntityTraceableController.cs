namespace Hephaestus.Backend.Application.Controllers;

public abstract class BaseEntityTraceableController<T>(DatabaseContext context) : BaseEntityController<T>(context) where T : class, IEntityTraceable {

	protected override (bool Success, string? Message) OnCreate(ref T item, int? user) {

		item.CreatedBy = user;
		item.CreatedOn = DateTime.UtcNow;

		item.UpdatedBy = user;
		item.UpdatedOn = DateTime.UtcNow;

		return (true, null);

	}

	protected override (bool Success, string? Message) OnUpdate(ref T item, T record, int? user) {

		item.CreatedBy = record.CreatedBy ?? user;
		item.CreatedOn = record.CreatedOn ?? DateTime.UtcNow;

		item.UpdatedBy = user;
		item.UpdatedOn = DateTime.UtcNow;

		return (true, null);

	}

}