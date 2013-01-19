// Main entry point for the website.

var express = require('express');

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
	response.render('home.html', {banner: '/img/homepage_banner.jpg', active: 'Home'});
});
app.get('/bride-and-groom/', function(request, response) {
	response.render('bride_and_groom.html', {banner: '/img/homepage_banner.jpg', active: 'Bride & Groom'});
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
	console.log('Listening on ' + port);
});

