function setLanguage(language) {

	var preferences = JSON.parse(localStorage.getItem("Preferences")) || {};
	language = language !== "en" && language !== "es" ? "pt" : language;
	preferences.Language = language;

	localStorage.setItem("Preferences", JSON.stringify(preferences));

}

function getLanguage() {

	var preferences = JSON.parse(localStorage.getItem("Preferences")) || {};
	var language = preferences.Language || "pt";

	return language !== "en" && language !== "es" ? "pt" : language;

}