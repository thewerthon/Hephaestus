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

function getWindowDimensions() {
	return {
		width: window.innerWidth,
		height: window.innerHeight
	};
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

function log(message) {

	console.log(message);

}