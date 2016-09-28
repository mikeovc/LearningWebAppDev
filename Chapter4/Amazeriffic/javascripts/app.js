var main = function() {
	"use strict";

	var makeTabActive = function(tabNumber) {
		$(".tabs span").removeClass("active");
		$(".tabs a:nth-child(" + tabNumber + ") span").addClass("active");
		$("main .content").empty();
		false;
	};

	for (var i = 1; i < 4; i++) {

	}

	$(".tabs a:nth-child(1)").on("click", function() {
		makeTabActive(1);
		return false;
	});
	$(".tabs a:nth-child(2)").on("click", function() {
		makeTabActive(2);
		return false;
	});
	$(".tabs a:nth-child(3)").on("click", function() {
		makeTabActive(3);
		return false;
	});
};

$(document).ready(main);