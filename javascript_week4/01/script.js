// wait for the DOM to load before you try to access it
document.addEventListener("DOMContentLoaded", function(event) {
	
	// array of names
	var students = [
	    "Ashley",
	    "Caroline",
	    "Chris",
	    "Clare",
	    "Julian",
	    "Pierre",
	    "Tanya",
	    "Yang"
	]; //end of array

	// get the container <div> 
	var studentContainer = document.querySelector(".container");

	// loop through the names
	for (var i=0; i < students.length; i++){ 
	    // create <div> element for each student
	    var myDiv = document.createElement("div"); 
	    // give the div a class
	    myDiv.className = "box";
	    // put the name text inside the <div>
	    myDiv.innerHTML = students[i];
	    // attach to the end of container div
	    studentContainer.appendChild(myDiv);    
	} // end of for loop

}); // end of EventListener for DOMContentLoaded