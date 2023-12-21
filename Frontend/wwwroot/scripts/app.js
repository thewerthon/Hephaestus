// Install Promt
let deferredPrompt;

window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredPrompt = e;
});

window.addEventListener('appinstalled', () => {
  deferredPrompt = null;
  isAppInstalled();
});

function isAppInstalled() {
	
	var appInstallButton = document.getElementById('app-install');
	
	if (deferredPrompt != null) {
		if (appInstallButton) appInstallButton.style.display = '';
		return false;
	} else {
		if (appInstallButton) appInstallButton.style.display = 'none';
		return true;
	}

}

function appInstall() {
	
	deferredPrompt.prompt();
	
}

async function setTheme(theme) {

	localStorage.setItem('UserTheme', theme);
	applyTheme(theme);

}

async function applyTheme(theme) {

	var titles = document.head.querySelectorAll('meta[name="theme-color"]')
	var styles = document.head.querySelectorAll('link[rel="stylesheet"]')

	switch (theme) {
		case 'light':
			addThemeColor("#ffffff");
			addStylesheet('css/base.css');
			addStylesheet('css/light.css');
			addStylesheet('css/app.css');
			break;

		case 'dark':
			addThemeColor("#1b324e");
			addStylesheet('css/base.css');
			addStylesheet('css/dark.css');
			addStylesheet('css/app.css');
			break;

		default:
			addThemeColor("#ffffff", '(prefers-color-scheme: light)');
			addThemeColor("#1b324e", '(prefers-color-scheme: dark)');
			addStylesheet('css/base.css');
			addStylesheet('css/light.css', '(prefers-color-scheme: light)');
			addStylesheet('css/dark.css', '(prefers-color-scheme: dark)');
			addStylesheet('css/app.css');

	}

	await new Promise(r => setTimeout(r, 250));

	styles.forEach(function (el) {
		document.head.removeChild(el);
	});

	titles.forEach(function (el) {
		document.head.removeChild(el);
	});

}

function addThemeColor(color, media) {

	var meta = document.createElement('meta');
	meta.name = 'theme-color';
	meta.content = color;
	if (media) { meta.media = media; }
	document.head.appendChild(meta);

}

function addStylesheet(href, media) {

	var link = document.createElement('link');
	link.rel = 'stylesheet';
	link.href = href;
	if (media) { link.media = media; }
	document.head.appendChild(link);

}

function getWindowDimensions() {
	return {
		width: window.innerWidth,
		height: window.innerHeight
	};
}

async function newUpdate() {

	sessionStorage.setItem('UpdateAvailable', true);
	document.getElementById("update-button").style.display = ""
	document.getElementById("update-icon").state = "in-autorenew"
	document.getElementById("update-icon").trigger = "in"
	await new Promise(r => setTimeout(r, 1500));
	document.getElementById("update-icon").trigger = "hover"
	document.getElementById("update-icon").state = "hover-autorenew"

}

async function update() {

	navigator.serviceWorker.getRegistrations().then(
		registrations => registrations.forEach(
			registration => registration.unregister()
		)
	);

	self.caches.keys().then(keys => { keys.forEach(key => self.caches.delete(key)) })
	sessionStorage.removeItem('UpdateAvailable');
	sessionStorage.removeItem('UpdateForced');
	await new Promise(r => setTimeout(r, 500));

	location.reload();
	location.reload();
	location.reload();

}

async function fireIconAnim(iconId, trigger, state, intro) {
	
	var icon = document.getElementById(iconId);
    icon.trigger = trigger || icon.trigger;
    icon.state = state || icon.state;
    icon.intro = intro || icon.intro;
	
}

function log(message) {

	console.log(message);

}