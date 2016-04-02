// bring in Express
var express = require('express');
var app = express();

// set up the Handlebars view engine
var handlebars = require('express-handlebars').create({ defaultLayout:'main' });
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

// tell express to find static files in the "public directory"
app.use(express.static('public'));

// --- routes --- //
app.get("/",function(req,res){
	// An object to hold the data that will get fed into the template.
	// Note! the property names here must match the variable names in handlebars
	var data = {
		 title: "Welcome to My Site",
		 content: "I collect things. I know some people."
	};
	// Render the template using this data
	res.render("standard", data);
});

app.get("/collection",function(req,res){
	// data object -- contains an array
	var data = {
		title: "Things I Collect",
		things: [
			'stamps',
			'legos',
			'dolls',
			'paperclips',
			't-shirts',
			'postcards',
			'coins',
			'Pokemon',
			'dinosaurs'
		]
	};
	res.render("things", data);
});

app.get("/contacts", function(req,res){
	// this data object contains an array of objects
	var data = {
		title: "My Contacts",
		contacts: [
			{
				name: 'Fred',
				email: 'fred@flintsone.com',
				photo: 'fred.png'
			},
			{
				name: 'Barney',
				email: 'barney@rubble.com',
				photo: 'barney.png'
			},
			{
				name: 'Wilma',
				email: 'wilma@flintsone.com',
				photo: 'wilma.png'
			}
		]
	};
	res.render("people",data);
});

// 404 Not found catch-all handler 
app.use(function(req, res, next){
	res.status(404);
	res.render('404');
});

// 500 server error handler 
app.use(function(err, req, res, next){
	console.error(err.stack);
	res.status(500);
	res.render('500');
});

// start the server
app.listen(3000, function(){
	console.log( 'Express started on http://localhost:3000; press Ctrl-C to terminate.' );
});