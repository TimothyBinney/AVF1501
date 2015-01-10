exports.createUI = function(jsonInfo){
	var win = Ti.UI.createWindow({
		backgroundColor: "grey",
		layout: "vertical",
	});


	for(var i = 0, j=jsonInfo.forecastday.length; i<j; i++){
		var view = Ti.UI.createView({
			backgroundColor: "white",
			top: 5,
			height: 60,
			width: "100%",
		});
		var titleLabel = Ti.UI.createLabel({
			left: 5,
			text: jsonInfo.forecastday[i].title
		});
		var imageView = Ti.UI.createImageView({
			right: 5,
			height: 55,
			width: 55,
			image: jsonInfo.forecastday[i].icon_url,
		});
		view.add(titleLabel);
		view.add(imageView);
		win.add(view);
		win.open();
	}
};
