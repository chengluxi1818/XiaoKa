$(document).ready(function() {
	$(".how").hover(function() {
		$(this).animate({
			'position': 'absolute',
			'borderBottom': '2px solid #3399ff',
			'width': '100%'
		}, 500);
	});

});