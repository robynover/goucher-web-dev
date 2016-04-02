// bring in Express
var express = require('express');
var app = express();

// set up the Handlebars view engine
var handlebars = require('express-handlebars').create({ defaultLayout:'main' });
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

// tell express to find static files in the "public" directory
app.use(express.static('public'));

// --- blog data --- //
var blog = {
	posts: {
		'hello': {
			title: "Hello!", 
			body: "Hello everyone! Welcome to my blog. This is my first post."
		},
		'breakfast': {
			title: "French Toast for Breakfast", 
			body: "I ate a delicious breakfast."
		},
		'what-thinking': {
			title: "What Is She Thinking?", 
			body: "What is my cat thinking, I wonder."
		},
		'growing-things': {
			title: "Growing Things", 
			body: "There is broccoli growing in the garden now."
		},
		'ear-worm': {
			title: "Ear Worm", 
			body: "I can't get that Adele song out of my head!"
		}
	}	
};

// --- ROUTES --- //

// Show all the posts
app.get('/',function(req,res){	
	res.render('home',blog);
});

// Show one post
//   (fyi, "slug" is another name for a short title)
app.get('/post/:slug',function(req,res){
	// the value of :slug is available as req.params.slug 
	var post = blog.posts[req.params.slug]; // uses bracket syntax because property name is inside a variable
	// if the post exists, render it
	if (post){
		res.render('single',post);
	} else { // else, send 404 error
		res.status(404);
		res.render('404');
	}
	
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