// bring in Express
var express = require('express');
var app = express();

// set up the Handlebars view engine
var handlebars = require('express-handlebars').create({ defaultLayout:'main' });
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

// tell express to find static files in the "public" directory
app.use(express.static('public'));

// body parser -- for form processing
// Make sure you install this module! Use: npm install --save body-parser
app.use(require('body-parser').urlencoded({extended:true}));

// use the file system
var fs = require('fs');

// --- ROUTES --- //

app.get('/',function(req,res){
	// read the file
	var file = fs.readFileSync('records/people.json', 'utf8');
	var jsonObject = JSON.parse(file); // convert file contents from JSON to Javascript object

	// send the json object to the template to render
	res.render('people-list',jsonObject);	
});

app.get('/add',function(req,res){
	res.render('form');
});

app.post('/new',function(req,res){
	// STEP 1: create an object to represent a person, using the values from the form
	var person = {}; // start with an empty object
	// add the name property to the person object
	person.name = req.body.name;
	// add the city property
	person.city = req.body.city;
	// add the mood property
	person.mood = req.body.mood;

	// STEP 2: get the file so you can change it
	var file = fs.readFileSync('records/people.json', 'utf8');
	var jsonObject = JSON.parse(file); // convert file contents from JSON to Javascript object
	
	// STEP 3: add the new person object to the array of people
	jsonObject.people.push(person);

	// STEP 4: save the new json to the file (overwrites the old version)
	//   JSON.stringify turns the object back to a string, so it can be stored in a file
	fs.writeFileSync('records/people.json',JSON.stringify(jsonObject));

	// SHOW the result
	res.render('person-added',{name:req.body.name});
	
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

// start server
app.listen(3000, function(){
	console.log( 'Express started on http://localhost:3000; press Ctrl-C to terminate.' );
});