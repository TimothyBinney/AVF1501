var ui = require("ui");

var getInfo = function(latitude, longitude){
	var url = "http://api.wunderground.com/api/7340a6497ad692ad/forecast/settings/q/40.7127,74.0059.json";
	var xhr = Ti.Network.createHTTPClient();
	xhr.onload = function(){
		var jsonInfo = JSON.parse(this.responseText);
		console.log(jsonInfo.forecast.txt_forecast);
		ui.createUI(jsonInfo.forecast.txt_forecast);
	};
	xhr.onerror = function(){
		alert("Network Required!");
	};
	xhr.open("GET", url);
	xhr.send();
};

exports.getInfo = getInfo;
