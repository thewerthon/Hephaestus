namespace Hephaestus.Backend.Controllers {

	public abstract class RecordsTracedCompleteController<T>(DatabaseContext context) : RecordsTracedBasicController<T>(context) where T : class, IRecordTracedComplete {

		protected override (bool Success, string? Message) OnUpdate(ref T item, T record, int? user) {

			item.CreatedBy = record.CreatedBy ?? user;
			item.CreatedAt = record.CreatedAt ?? DateTime.UtcNow;

			if (item.Active) {

				item.UpdatedBy = user;
				item.UpdatedAt = DateTime.UtcNow;

			} else {

				item.DeletedBy = user;
				item.DeletedAt = DateTime.UtcNow;

			}

			return (true, null);

		}

	}

}