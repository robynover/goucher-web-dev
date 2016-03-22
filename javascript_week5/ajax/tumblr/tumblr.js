// wait for page to load
$(window).load(function(){
	var baseUrl = 'https://api.tumblr.com/v2/tagged?tag=';
	var tag = 'election';
	var apiKey = 'REPLACE THIS WITH YOUR API KEY';
	var url = baseUrl + tag + '&api_key=' + apiKey;

    $.get(url, function (data) {
    	// Check the web developer console for the whole response
    	console.log(data);
        // Loop through posts -- tumblr calls this section "response" 
        for(var i = 0; i < data.response.length; i++){
        	var title = data.response[i].summary;
        	// create tag with jQuery
        	var p = $('<p>' + title + '</p>');
        	$('#container').append(p);


    		// SUGGESTED TO DO:
    		// get the link to the tumblr post
    		// use data.response[i].post_url
    		// 
    		// ALSO LOOK FOR:
    		//  * blog name
    		//  * photos
    		//  * tags
        }

    }, "jsonp"); //end $.get()

}); // end window load listener