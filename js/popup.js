window.onload = function() {
	chrome.tabs.query( {active: true, lastFocusedWindow: true}, function (tabs) {
		var tab = tabs[0];
		var music_title = tab.title.split("(")[0];
		var composer = tab.title.split("(")[1].split(")")[0].split(",")[0];
		var first_name = tab.title.split("(")[1].split(")")[0].split(",")[1];
		var search = "https://www.youtube.com/results?search_query=" + composer+first_name+ "+" + music_title + "+"   ;
		chrome.tabs.create({url: search});
		window.close();
	});
}