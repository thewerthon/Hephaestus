function getLang() {

	return localStorage.getItem("UserLang") ?? "pt";

}

function setLang(lang) {

	localStorage.setItem("UserLang", lang);

}