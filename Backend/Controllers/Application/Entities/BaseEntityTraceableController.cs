namespace Hephaestus.Backend.Application.Controllers;

public abstract class BaseEntityTraceableController<TEntity>(DatabaseContext context) : BaseEntityController<TEntity>(context) where TEntity : class, IEntityTraceable {

	protected override (bool Success, string? Message) OnCreate(ref TEntity item, int? user) {

		item.CreatedBy = user;
		item.CreatedOn = DateTime.UtcNow;

		item.UpdatedBy = user;
		item.UpdatedOn = DateTime.UtcNow;

		return (true, null);

	}

	protected override (bool Success, string? Message) OnUpdate(ref TEntity item, TEntity record, int? user) {

		item.CreatedBy = record.CreatedBy ?? user;
		item.CreatedOn = record.CreatedOn ?? DateTime.UtcNow;

		item.UpdatedBy = user;
		item.UpdatedOn = DateTime.UtcNow;

		if (!item.Active) {

			item.DeletedBy = record.DeletedBy ?? user;
			item.DeletedOn = record.DeletedOn ?? DateTime.UtcNow;

		}

		return (true, null);

	}

	protected override (bool Success, string? Message) OnDelete(ref TEntity item, int? user) {

		item.Active = false;
		item.DeletedBy = user;
		item.DeletedOn = DateTime.UtcNow;

		return (true, null);

	}

}