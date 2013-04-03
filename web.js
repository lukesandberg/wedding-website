// Main entry point for the website.

var express = require('express');

var utils = {
	getDriveImageUrl: function(filename) {
		return 'https://googledrive.com/host/0B6vNk5GSBIjUWG9xNklsYnVGaHc/' + filename;
	},
	getDaysToGo: function() {
		var daysLeft = Math.round((new Date(2013, 6, 13) - new Date()) / (1000*60*60*24));
		if (daysLeft < 0) {
			return "";
		}
		if (daysLeft == 0 || daysLeft == 1) {
			return "The Wedding is Soon!";
		}
		return daysLeft + " days to go!";
	}
};

var app = express.createServer(express.logger());
app.configure(function()  {
	app.use(express.methodOverride());
	app.use(express.bodyParser());
	app.use(express.static(__dirname + '/public'));
	app.register('.html', require('jade'));
	app.use(express.errorHandler({
		dumpExceptions: true, 
		showStack: true
	}));
	app.use(app.router);
});

app.get('/', function(request, response) {
	console.log(utils.getDaysToGo());
	response.render('home.html', {
		banner: utils.getDriveImageUrl('homepage_banner.jpg'), 
		active: 'Home', 
		daysToGo: utils.getDaysToGo()
	});
});
app.get('/bride-and-groom/', function(request, response) {
	response.render('bride_and_groom.html', {
		banner: utils.getDriveImageUrl('bride_and_groom_banner.jpg'), 
		active: 'Bride & Groom',
		daysToGo: utils.getDaysToGo()
	});
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
	console.log('Listening on ' + port);
});

