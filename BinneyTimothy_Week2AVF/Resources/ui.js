exports.createUI = function(tblData){
	console.log(tblData);
	var win = Ti.UI.createWindow({
		backgroundColor: "grey",
	});
	
	var view = Ti.UI.createView({
		backgroundColor: "white",
		height: Ti.UI.SIZE.FILL,
		width: Ti.UI.SIZE.FILL, 
		layout: "vertical",
	});
	var imageView = Ti.UI.createImageView({
		top: 15,
		align: "center",
		height: 150,
		width: 150,
		image: tblData[0].icon,
	});
	
	var label = Ti.UI.createLabel({
		bottom: 1,
		height: 5,
		font: {fontSize:14},
		text: tblData[0].obs,
	});
	
	var tempLabel = Ti.UI.createLabel({
		top: 20,
		height: 100,
		width: 150,
		font: {fontSize: 26},
		align: "center",
		text: tblData[0].temp,
	});
	
	var weatherLabel = Ti.UI.createLabel({
		top: 30,
		height: 20,
		font: {fontSize: 20},
		text: tblData[0].weather,
	});
	var windLabel = Ti.UI.createLabel({
		top: 30,
		height: 5,
		align: "center",
		font: {fontSize: 20},
		text: "Winds " + tblData[0].wind,
	});
		
		view.add(tempLabel);
		view.add(imageView);
		view.add(label);
		view.add(windLabel);
		view.add(weatherLabel);
		win.add(view);
		win.open();
	
};
