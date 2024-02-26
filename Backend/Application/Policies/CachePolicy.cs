using Microsoft.AspNetCore.OutputCaching;

namespace Hephaestus.Backend.Application.Policies;

public class CachePolicy : IOutputCachePolicy {

	public static readonly CachePolicy Instance = new();

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
		return HttpMethods.IsGet(request.Method) || HttpMethods.IsHead(request.Method);

	}

	public ValueTask ServeFromCacheAsync(OutputCacheContext context, CancellationToken cancellation) => ValueTask.CompletedTask;
	public ValueTask ServeResponseAsync(OutputCacheContext context, CancellationToken cancellation) => ValueTask.CompletedTask;

}