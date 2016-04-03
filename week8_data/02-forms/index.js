/*

	Tip Calculator

 */

// bring in Express
var express = require('express');
var app = express();

// set up the Handlebars view engine
var handlebars = require('express-handlebars').create({ defaultLayout:'main' });
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

// tell express to find static files in the "public" directory
app.use(express.static('public'));

//body parser -- for form processing
app.use(require('body-parser').urlencoded({extended:true}));

// --- ROUTES --- //

app.get('/',function(req,res){	
	res.render('tipForm');	
});

// handle the post to the form
app.post('/calc',function(req,res){

	var origTotal = Number(req.body.total);
	var tipPercent = Number(req.body.tip);

	// Make sure the inputs are valid numbers
	if (origTotal && tipPercent){
		// Calculate the tip
		var tipDecimal = tipPercent * .01;
		var tipAmount = origTotal * tipDecimal;
		var newTotal = origTotal + tipAmount;

		// Put the results in an object to send to the view
		var data = {
			origTotal: origTotal,
			tipAmount: tipAmount,
			tipPercent: tipPercent,
			newTotal: newTotal
		}
	} else { // report the error
		var data = {
			error: 1,
			message: "Your input was not valid. You may only enter numbers."
		}
	}

	res.render('results',data);
	
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