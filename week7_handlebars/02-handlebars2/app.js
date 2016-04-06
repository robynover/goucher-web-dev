// bring in Express
var express = require('express');
var app = express();

// set up the Handlebars view engine
var handlebars = require('express-handlebars').create({ defaultLayout:'main' });
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

// tell express to find static files in the "public" directory
app.use(express.static('public'));

// --- routes --- //
app.get("/",function(req,res){
	// An object to hold the data that will get fed into the template.
	// Note! the property names here must match the variable names in handlebars
	var data = {
		 pageTitle: "Spectacular Place is full of cats",
		 pageContent: "Cat ipsum dolor sit amet, cat snacks or sleep on keyboard but nap all day who's the baby."
	};
	// Render the template using this data
	res.render("page", data);
});

app.get("/work",function(req,res){
	// set up the content
	var data = {
		 pageTitle: "Our Work",
		 pageContent: "We work with cats all day. Our clients love us!"
	};
	// render the template
	res.render("page", data);
});

app.get("/play",function(req,res){
	var data = {
		 pageTitle: "We Play Hard",
		 pageContent: "Chase silly fish toys all over the house."
	};
	res.render("page",data);
});

/*
	TO DO:
	As an exercise, fill in the content for the rest of the pages and render them.

	Another practice exercise: give one of the pages a different view template and render that one instead.

 */

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