loadTheme();

function loadTheme() {

	var theme = localStorage.getItem('UserTheme');

	switch (theme) {
		case 'light':
			applyTheme('light');
			break;

		case 'dark':
			applyTheme('dark');
			break;

		default:
			applyTheme('auto');

	}

}

async function applyTheme(theme) {

	var titles = document.head.querySelectorAll('meta[name="theme-color"]')
	var styles = document.head.querySelectorAll('link[rel="stylesheet"]')

	switch (theme) {
		case 'light':
			addThemeColor("#ffffff");
			addStylesheet('css/base-light.css');
			addStylesheet('css/custom-light.css');
			addStylesheet('css/default.css');
			break;

		case 'dark':
			addThemeColor("#1b324e");
			addStylesheet('css/base-dark.css');
			addStylesheet('css/custom-dark.css');
			addStylesheet('css/default.css');
			break;

		default:
			addThemeColor("#ffffff", '(prefers-color-scheme: light)');
			addThemeColor("#1b324e", '(prefers-color-scheme: dark)');
			addStylesheet('css/base-light.css', '(prefers-color-scheme: light)');
			addStylesheet('css/base-dark.css', '(prefers-color-scheme: dark)');
			addStylesheet('css/custom-light.css', '(prefers-color-scheme: light)');
			addStylesheet('css/custom-dark.css', '(prefers-color-scheme: dark)');
			addStylesheet('css/default.css');

	}

	await new Promise(r => setTimeout(r, 250));
	document.getElementById('theme').remove();

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