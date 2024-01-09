function getLang() {
	
	return localStorage.getItem('UserLang');
	
}

function setLang(lang) {
	
	localStorage.setItem('UserLang', lang);
	
}