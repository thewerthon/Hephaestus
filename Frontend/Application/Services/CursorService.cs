namespace Hephaestus.Frontend.Application.Services;

public class CursorService(IJSRuntime runtime) {

	private readonly IJSRuntime JSRuntime = runtime;

	public async Task SetDefaultAsync() {

		await JSRuntime.InvokeVoidAsync("setCursor", "default");

	}

	public async Task SetHourglassAsync() {

		await JSRuntime.InvokeVoidAsync("setCursor", "wait");

	}

	public async Task SetPointerAsync() {

		await JSRuntime.InvokeVoidAsync("setCursor", "pointer");

	}

}