var data = require("data");

var getInfo = function(){
	var url = "https://api.dailymotion.com/channel/auto/videos?fields=url,thumbnail_60_url,title,owner.screenname";
	var xhr = Ti.Network.createHTTPClient();
	xhr.onload = function(){
		var jsonInfo = JSON.parse(this.responseText);
		console.log(JSON.stringify(jsonInfo.current_observation));
		data.saveData(jsonInfo.current_observation,latitude,longitude);
	};
	xhr.onerror = function(){
		alert("Network Required!");
	};
	xhr.open("GET", url);
	xhr.send();
};

exports.getInfo = getInfo;
