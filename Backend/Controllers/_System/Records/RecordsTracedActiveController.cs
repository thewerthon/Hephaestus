namespace Hephaestus.Backend.Controllers {

	public abstract class RecordsTracedActiveController<T>(DatabaseContext context) : RecordsTracedController<T>(context) where T : class, IRecordTracedActive {

		protected override bool OnUpdate(ref T item, int? user) {

			item.CreatedBy ??= user;
			item.CreatedAt ??= DateTime.UtcNow;

			if (item.Active) {

				item.UpdatedBy = user;
				item.UpdatedAt = DateTime.UtcNow;

			} else {

				item.DeletedBy = user;
				item.DeletedAt = DateTime.UtcNow;

			}

			return true;

		}

	}

}