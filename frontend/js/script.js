(function($){
	require('script!../../node_modules/jquery-placeholder/jquery.placeholder.js');
	$(document).ready( function() { // $(window).ready --IE8
		if($('html').hasClass('no-placeholder')) {
			$('input').placeholder();
		}
	});
	/*$('#page-content-wrapper').mousedown(function(e) {
			e.preventDefault();
			console.log(n);
			if(parseInt($(window).width()) < 769) {
				$('#page-content-wrapper').mousemove(function(e){
					$("#wrapper").toggleClass("toggled");
				});
			} else {
				
			}
		})*/
		var clicking = false;
		var move = false;
		var x = 0 , y = 0;

		$('#page-content-wrapper').mousedown(function(e){
			if(parseInt($(window).width()) < 769) {
				clicking = true;
				x = e.pageX;
				y = e.pageY;
			} 
		});

		$('#page-content-wrapper').mouseup(function(e){
			if(clicking && move) {
				if((Math.abs(x-e.pageX) > 20) || (Math.abs(y-e.pageY) > 20)) {
					clicking = false;
					move = false;
					setTimeout(function(){
						$("#wrapper").toggleClass("toggled");
					}, 500);
				}
				
			}
			
		})

		$('#page-content-wrapper').mousemove(function(e){
			if(clicking == false) {
				return;
			} else {
				move = true;
			}
			
		});
})(jQuery);