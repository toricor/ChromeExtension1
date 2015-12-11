window.onload = function() {
	chrome.tabs.query( {active: true, lastFocusedWindow: true}, function (tabs) {
		var tab = tabs[0];
		var music_title = tab.title.split("(")[0];
		var composer = tab.title.split("(")[1].split(")")[0].split(",")[0];
		//tab.urlに開いているタブのURLが入っている
		var search = "https://www.youtube.com/results?search_query=" + composer + "+" + music_title;
		//chrome.tabs.update(tab.id, {url: search})
		chrome.tabs.create({url: search});
		window.close();
	});
}