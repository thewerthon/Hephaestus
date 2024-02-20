let deferredPrompt = null;

window.addEventListener("beforeinstallprompt", (e) => {

	e.preventDefault();
	deferredPrompt = e;

});

window.addEventListener("appinstalled", () => {

	deferredPrompt = null;
	isAppInstalled();

});

function disposeLoader() {
	
	document.getElementById("loader").remove()
	
}

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
	
	localStorage.removeItem("LastLogged");
	localStorage.removeItem("LastFetched");
	sessionStorage.removeItem("UpdateAvailable");
	sessionStorage.removeItem("UpdateForced");
	await new Promise(r => setTimeout(r, 500));

	reload();

}

function reload() {

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

function getUsageLogInfo() {

	var user = JSON.parse(localStorage.getItem("CurrentUser")) || {};
	var version = JSON.parse(localStorage.getItem("CurrentVersion")) || {};
	var preferences = JSON.parse(localStorage.getItem("Preferences")) || {};

    return {
		AppBuild: version.Build,
		AppVersion: version.Name,
		PlatformName: platform.name,
		PlatformLayout: platform.layout,
		PlatformVersion: platform.version,
		PlatformProduct: platform.product,
		PlatformLanguage: navigator.language,
		PlatformManufacturer: platform.manufacturer,
		SystemFamily: platform.os.family,
		SystemVersion: platform.os.version,
		SystemArchitecture: platform.os.architecture,
		User: user.Id,
		UserTheme: preferences.Theme,
		UserLanguage: preferences.Language
	};
	
}

function log(message) {

	console.log(message);

}