//SLIDER

$(document).ready(function() {
	$(".toggle_mnu").click(function() {
		if ($(".main-nav").is(":visible")) {
			$(".top_text").css("opacity", "1");
			$(".main-nav").fadeOut(600);
			$(".main-nav li a").removeClass("fadeInUp animated");
		} else {
			$(".top_text").css("opacity", ".1");
			$(".main-nav").fadeIn(600);
			$(".main-nav li a").addClass("fadeInUp animated");
		};
	});
	
	$(".b7-unit").equalHeights();
});