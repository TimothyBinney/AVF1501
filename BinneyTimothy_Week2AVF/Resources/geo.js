var api = require("api");

exports.getPosition = function() {
	Ti.Geolocation.purpose = "Application requires coordinates to run";
	Ti.Geolocation.getCurrentPosition(function(e) {
		if (Ti.Platform.osname === "iphone" || Ti.Platform.osname === "ipad") {
			console.log(JSON.stringify(e.source));
			var latitude = e.coords.latitude;
			var longitude = e.coords.longitude;
		} else {
			var latitude = 40.7127;
			var longitude = 74.0059;
		};
		console.log("the latitude is " + latitude);
		api.getInfo(latitude, longitude);
	}, function() {
		alert("Geo Error!");
	}, {
		timeout : 10000
	});
};

