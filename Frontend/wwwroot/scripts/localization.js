function getLanguage() {
	
    var info = localStorage.getItem('UserInfo');
    var user = info ? JSON.parse(info) : null;
    var lang = user?.Preferences?.Language;
	
    if (typeof lang === 'string') {
        return lang;
    } else {
        return "pt";
    }
	
}

function setLanguage(language) {
	
    var info = localStorage.getItem('UserInfo');
    var user = info ? JSON.parse(info) : {};
    
    if (!user.Preferences) {
        user.Preferences = {};
    }

    user.Preferences.Language = language;
	localStorage.setItem('UserInfo', JSON.stringify(user));
	
}