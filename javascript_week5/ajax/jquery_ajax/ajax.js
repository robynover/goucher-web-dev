// wait for page to load
$(window).load(function(){
	var weatherUrl = "http://api.openweathermap.org/data/2.5/weather?q=Baltimore&units=imperial&APPID=52b5ad39b4e56b99d170f040d98845f6";
	$.ajax({
	  url: weatherUrl,
	  dataType: "jsonp"
	})
	  .done( function(response) {

	    // show the raw json
	    $('#raw_json pre').text(JSON.stringify(response));

	        text = '<b>Current Temperature: </b>' + response.main.temp + ' F<br/>';
	        text += '<b>Weather Conditions: </b>' + response.weather[0].description + '<br/>';
	        $('#parsed_json').append(text);
    

		});

}); //end window load