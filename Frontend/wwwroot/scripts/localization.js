function getLanguage() {

	userPreferences.refresh();
	return userPreferences.language;

}

function setLanguage(language) {

	userPreferences.language = language;
	userPreferences.save()

}