(function($){
	require('script!../../node_modules/jquery-placeholder/jquery.placeholder.js');
	$(document).ready( function() { // $(window).ready --IE8
		if($('html').hasClass('no-placeholder')) {
			$('input').placeholder();
		}
	});
})(jQuery);