// bring in Express
var express = require('express');
var app = express();

// set up the Handlebars view engine
var handlebars = require('express-handlebars').create({ defaultLayout:'main' });
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

// --- routes --- //
app.get("/",function(req,res){
	// An object to hold the data that will get fed into the template.
	// Note! the property names here must match the variable names in handlebars
	var myData = {
		 name: 'Robyn',
		 city: 'Brooklyn',
		state: 'New York',
		extra: 'If your homework contains this line I will know you did not read the code'
	};
	// Render the template using this data
	res.render("home", myData);
});

app.get("/cats",function(req,res){
	// render the template (with no data)
	res.render("catpage");
});

app.get("/tom",function(req,res){
	var tomData = {
		 name: 'Tom',
		 city: 'Baltimore',
		state: 'Maryland',
	};
	res.render("home",tomData);
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

app.listen(3000, function(){
	console.log( 'Express started on http://localhost:3000; press Ctrl-C to terminate.' );
});