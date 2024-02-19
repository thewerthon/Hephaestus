let deferredPrompt = null;

window.addEventListener("beforeinstallprompt", (e) => {

	e.preventDefault();
	deferredPrompt = e;

});

window.addEventListener("appinstalled", () => {

	deferredPrompt = null;
	isAppInstalled();

});

function isAppInstalled() {

	const appInstallButton = document.getElementById("app-install");

	if (deferredPrompt) {
		if (appInstallButton) appInstallButton.style.display = "";
		return false;
	} else {
		if (appInstallButton) appInstallButton.style.display = "none";
		return true;
	}

}

function appInstall() {

	if (deferredPrompt) {
		deferredPrompt.prompt();
	}

}

function getWindowWidth() {

	return window.innerWidth;

}

function getWindowHeight() {

	return window.innerHeight;

}

function newUpdate() {

	sessionStorage.setItem("UpdateAvailable", true);
	document.getElementById("update-button").style.display = ""

}

async function update() {

	navigator.serviceWorker.getRegistrations().then(
		registrations => registrations.forEach(
			registration => registration.unregister()
		)
	);

	self.caches.keys().then(keys => { keys.forEach(key => self.caches.delete(key)) })
	sessionStorage.removeItem("UpdateAvailable");
	sessionStorage.removeItem("UpdateForced");
	await new Promise(r => setTimeout(r, 500));

	location.reload();
	location.reload();
	location.reload();

}

async function fireIconAnim(iconId) {

	const icon = document.getElementById(iconId);
	icon.trigger = icon.trigger;
	icon.state = icon.state;

}

function setCursor(state) {

	state = state == "pointer" || state == "wait" ? state : "default";
	document.body.style.cursor = state;

}

function getBrowserInfo() {

    return {
		PlatformName: platform.name,
		PlatformLayout: platform.layout,
		PlatformVersion: platform.version,
		PlatformProduct: platform.product,
		PlatformLanguage: navigator.language,
		PlatformManufacturer: platform.manufacturer,
		SystemFamily: platform.os.family,
		SystemVersion: platform.os.version,
		SystemArchitecture: platform.os.architecture
	};
	
}

function log(message) {

	console.log(message);

}