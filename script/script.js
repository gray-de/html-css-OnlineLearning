$(document).ready(function() {
	$(".header__burger").click(function(event) {
		$(".header__block,.header__burger").toggleClass("active");
		$("body").toggleClass("lock")
	});
});