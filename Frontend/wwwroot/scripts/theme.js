loadTheme();

function loadTheme() {

	const theme = getTheme();
	applyTheme(theme, false);

}

window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", event => {

	const theme = getTheme();
	if (theme == "auto") setToggle();

});

function setTheme(theme) {

	var preferences = JSON.parse(localStorage.getItem("Preferences")) || {};
	theme !== "light" && theme !== "dark" ? "auto" : theme;
	preferences.Theme = theme;

	localStorage.setItem("Preferences", JSON.stringify(preferences));

}

function getTheme() {

	var preferences = JSON.parse(localStorage.getItem("Preferences")) || {};
	var theme = preferences.Theme || "auto";

	return theme !== "light" && theme !== "dark" ? "auto" : theme;

}

function getCurrentTheme() {

	let theme = getTheme();

	if (theme == "auto") {
		if (window.matchMedia("(prefers-color-scheme: light)").matches) theme = "light";
		if (window.matchMedia("(prefers-color-scheme: dark)").matches) theme = "dark";
	}

	return theme;

}

function setToggle() {

	const theme = getTheme();
	const toggle = document.getElementById("theme-icon");

	switch (theme) {
		case "light":
			if (toggle) toggle.trigger = "morphout";
			break;

		case "dark":
			if (toggle) toggle.trigger = "morphin";
			break;

		default:
			if (toggle && window.matchMedia("(prefers-color-scheme: light)").matches) toggle.trigger = "morphout";
			if (toggle && window.matchMedia("(prefers-color-scheme: dark)").matches) toggle.trigger = "morphin";

	}

}

async function toggleTheme() {

	let theme = getTheme();
	const toggle = document.getElementById("theme-icon");

	if (theme == "auto") {
		if (window.matchMedia("(prefers-color-scheme: light)").matches) theme = "light";
		if (window.matchMedia("(prefers-color-scheme: dark)").matches) theme = "dark";
	}

	switch (theme) {
		case "light":
			setTimeout(() => { applyTheme("dark"); }, 250)
			if (toggle) toggle.trigger = "morphin";
			return "dark";
			break;

		case "dark":
			setTimeout(() => { applyTheme("light"); }, 350)
			if (toggle) toggle.trigger = "morphout";
			return "light";
			break;

	}

}

async function applyTheme(theme, save = true) {

	const titles = document.head.querySelectorAll("meta[name='theme-color']")
	const styles = document.head.querySelectorAll("link[rel='stylesheet']")

	switch (theme) {
		case "light":
			addThemeColor("#ffffff");
			addStylesheet("css/base-light.css");
			addStylesheet("css/custom-light.css");
			addStylesheet("css/default.css");
			if (save) setTheme("light");
			setToggle();
			break;

		case "dark":
			addThemeColor("#1b324e");
			addStylesheet("css/base-dark.css");
			addStylesheet("css/custom-dark.css");
			addStylesheet("css/default.css");
			if (save) setTheme("dark");
			setToggle();
			break;

		default:
			addThemeColor("#ffffff", "(prefers-color-scheme: light)");
			addThemeColor("#1b324e", "(prefers-color-scheme: dark)");
			addStylesheet("css/base-light.css", "(prefers-color-scheme: light)");
			addStylesheet("css/base-dark.css", "(prefers-color-scheme: dark)");
			addStylesheet("css/custom-light.css", "(prefers-color-scheme: light)");
			addStylesheet("css/custom-dark.css", "(prefers-color-scheme: dark)");
			addStylesheet("css/default.css");
			if (save) setTheme("auto");
			setToggle();

	}

	await new Promise(r => setTimeout(r, 250));

	titles.forEach(function (el) {
		document.head.removeChild(el);
	});

	styles.forEach(function (el) {
		document.head.removeChild(el);
	});

}

function addThemeColor(color, media) {

	let meta = document.createElement("meta");
	meta.name = "theme-color";
	meta.content = color;
	if (media) { meta.media = media; }
	document.head.appendChild(meta);

}

function addStylesheet(href, media) {

	let link = document.createElement("link");
	link.rel = "stylesheet";
	link.href = href;
	if (media) { link.media = media; }
	document.head.appendChild(link);

}