/* ============================= 

using jQuery

================================ */

// wait for document to load
$(document).ready(function(){
//________NO CODE ABOVE HERE! ____________

	// add click listener to all <li> tags
	$('li').on("click", function(){
		// "this" refers to the element that has been clicked
		$(this).hide();
	});

	// add click listener to the button
	$('.btn').on("click", function(){
		// show all the <li> tags
		$('li').show();
	});

//________ NO CODE BELOW HERE_______________
}); //end document ready