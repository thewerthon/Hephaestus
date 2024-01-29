class UserPreferences {

	localData;

	constructor() {
		this.refresh();
	}

	get theme() {
		const theme = this.localData.theme;
		return theme === "light" || theme === "dark" ? theme : "auto";
	}

	set theme(theme) {
		theme = theme !== "light" && theme !== "dark" ? "auto" : theme;
		this.localData.theme = theme;
	}

	get language() {
		return this.localData.language || "pt";
	}

	set language(lang) {
		this.localData.language = lang;
	}

	refresh() {
		this.localData = JSON.parse(localStorage.getItem("UserPreferences")) || {};
	}

	save() {
		localStorage.setItem("UserPreferences", JSON.stringify(this.localData));
	}

}

var userPreferences = new UserPreferences();