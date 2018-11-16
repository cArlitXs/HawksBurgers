$(document).ready(function() {
	
	// Menu principal
	
	$('#icono-menu').click(function (e) {
		e.preventDefault();
		if ($(this).hasClass('active')){
			$(this).removeClass('active');
			$('body > nav').fadeToggle('fast', 'linear');
		} else {
			$(this).addClass('active');
			$('body > nav').fadeToggle('fast', 'linear');
		}
	});
	
});