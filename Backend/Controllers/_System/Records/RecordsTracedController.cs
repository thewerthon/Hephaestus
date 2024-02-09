namespace Hephaestus.Backend.Controllers {

	public abstract class RecordsTracedController<T>(DatabaseContext context) : RecordsController<T>(context) where T : class, IRecordTraced {

		protected override bool OnCreate(ref T item, int? user) {

			item.CreatedBy = user;
			item.CreatedAt = DateTime.UtcNow;

			item.UpdatedBy = user;
			item.UpdatedAt = DateTime.UtcNow;

			return true;

		}

		protected override bool OnUpdate(ref T item, int? user) {

			item.CreatedBy ??= user;
			item.CreatedAt ??= DateTime.UtcNow;

			item.UpdatedBy = user;
			item.UpdatedAt = DateTime.UtcNow;

			return true;

		}

	}

}