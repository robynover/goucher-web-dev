// bring in the Express module
var express = require('express');
// create a new instance of express
var app = express();

// ** Routes ** //
// Set up the home page 
app.get('/',function(request,response){
	// respond with "Hello world"
	response.send('Hello world');
});

// Start the server. Listen for traffic on port 3000
app.listen(3000, function () {
	// Print out a message to the console
  	console.log('Listening on port 3000!');
});