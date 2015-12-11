$(function () {
    chrome.tabs.getSelected(null, function(tab) {
        var a = $('#title').text(tab.title.split("-")[0]);
		//$('#url').text(tab.url.split("(")[1].split(")")[0].split(",")[0]); 		//family name
		//$('#url').text(tab.url.split("(")[1].split(")")[0]).split(",")[1]); 		//first name    familyとfirstを両方有効にすると表示できない。
    });
});