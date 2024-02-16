namespace Hephaestus.Backend.Controllers {

	public abstract class RecordsTracedActiveController<T>(DatabaseContext context) : RecordsTracedController<T>(context) where T : class, IRecordTracedActive {

		protected override (bool Success, string? Message) OnUpdate(ref T item, int? user) {

			if (item.Active) {

				item.UpdatedBy = user ?? 1;
				item.UpdatedAt = DateTime.UtcNow;

			} else {

				item.DeletedBy = user ?? 1;
				item.DeletedAt = DateTime.UtcNow;

			}

			return (true, null);

		}

	}

}