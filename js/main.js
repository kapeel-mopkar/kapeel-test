$(function(){ 
	'use strict';
	//Initiat WOW JS
	new WOW().init();

	//Scroll to top
	$(document).on( 'scroll', function(){
 	if ($(window).scrollTop() > 100) {
			$('.scroll-top-wrapper').addClass('show');
		} else {
			$('.scroll-top-wrapper').removeClass('show');
		}
	}); 
	$('.scroll-top-wrapper').on('click', scrollToTop);
});
 
function scrollToTop() {
	var verticalOffset = typeof(verticalOffset) != 'undefined' ? verticalOffset : 0;
	var element = $('body');
	var offset = element.offset();
	var offsetTop = offset.top;
	$('html, body').animate({scrollTop: offsetTop}, 500, 'linear');
}