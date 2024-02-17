namespace Hephaestus.Backend.Controllers {

	public abstract class RecordsTracedBasicController<T>(DatabaseContext context) : RecordsController<T>(context) where T : class, IRecordTracedBasic {

		protected override (bool Success, string? Message) OnCreate(ref T item, int? user) {

			item.CreatedBy = user;
			item.CreatedAt = DateTime.UtcNow;

			item.UpdatedBy = user;
			item.UpdatedAt = DateTime.UtcNow;

			return (true, null);

		}

		protected override (bool Success, string? Message) OnUpdate(ref T item, T record, int? user) {

			item.CreatedBy = record.CreatedBy ?? user;
			item.CreatedAt = record.CreatedAt ?? DateTime.UtcNow;

			item.UpdatedBy = user;
			item.UpdatedAt = DateTime.UtcNow;

			return (true, null);

		}

	}

}