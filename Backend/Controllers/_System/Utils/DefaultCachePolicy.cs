using Microsoft.AspNetCore.OutputCaching;

namespace Hephaestus.Backend.Controllers {

	public class DefaultCachePolicy : IOutputCachePolicy {

		public static readonly DefaultCachePolicy Instance = new();

		ValueTask IOutputCachePolicy.CacheRequestAsync(OutputCacheContext context, CancellationToken cancellationToken) {

			var attemptOutputCaching = AttemptOutputCaching(context);
			context.EnableOutputCaching = true;
			context.AllowCacheLookup = attemptOutputCaching;
			context.AllowCacheStorage = attemptOutputCaching;
			context.AllowLocking = true;

			// Vary by any query by default
			context.CacheVaryByRules.QueryKeys = "*";
			return ValueTask.CompletedTask;

		}

		private static bool AttemptOutputCaching(OutputCacheContext context) {

			var request = context.HttpContext.Request;

			if (!HttpMethods.IsGet(request.Method) && !HttpMethods.IsHead(request.Method)) return false;
			//if (!StringValues.IsNullOrEmpty(request.Headers.Authorization) || request.HttpContext.User?.Identity?.IsAuthenticated == true) return false;
			return true;

		}

		public ValueTask ServeFromCacheAsync(OutputCacheContext context, CancellationToken cancellation) => ValueTask.CompletedTask;
		public ValueTask ServeResponseAsync(OutputCacheContext context, CancellationToken cancellation) => ValueTask.CompletedTask;

	}

}