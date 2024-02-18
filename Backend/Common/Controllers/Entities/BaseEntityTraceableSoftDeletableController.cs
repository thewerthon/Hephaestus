namespace Hephaestus.Backend.Application.Controllers;

public abstract class BaseEntityTraceableSoftDeletableController<T> : BaseEntityTraceableController<T> where T : class, IEntityTraceableSoftDeletable {

	public BaseEntityTraceableSoftDeletableController(DatabaseContext context) : base(context) {

		SoftDeletable = true;

	}

	protected override (bool Success, string? Message) OnUpdate(ref T item, T record, int? user) {

		item.CreatedBy = record.CreatedBy ?? user;
		item.CreatedOn = record.CreatedOn ?? DateTime.UtcNow;

		item.UpdatedBy = user;
		item.UpdatedOn = DateTime.UtcNow;

		if (item.Deleted) {

			item.DeletedBy = record.DeletedBy ?? user;
			item.DeletedOn = record.DeletedOn ?? DateTime.UtcNow;

		}

		return (true, null);

	}

	protected override (bool Success, string? Message) OnDelete(ref T item, int? user) {

		item.Deleted = true;
		item.DeletedBy = user;
		item.DeletedOn = DateTime.UtcNow;

		return (true, null);

	}

}
