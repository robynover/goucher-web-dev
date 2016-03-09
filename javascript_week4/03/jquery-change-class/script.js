$(document).ready(function(){
	$(".lights div").click(function(){
		// if it's on, turn it off
		if ($(this).hasClass("on")){
			$(this).removeClass("on");
			$(this).addClass("off");
		} else { //if it's off, turn it on
			$(this).removeClass("off");
			$(this).addClass("on");
		}
	});
});
