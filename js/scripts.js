$(document).ready(function() {
	
	// Menu principal
	
	$('#icono-menu').click(function(e) {
		e.preventDefault();
		if ($(this).hasClass('active')){
			$(this).removeClass('active');
			$(this).css('background-image', 'url(../img/burguer.svg)');
			$(this).empty();
			$('body > nav').fadeToggle('fast', 'linear');
		} else {
			$(this).addClass('active');
			$(this).css('background-image', 'none');
			$(this).html('<i class="fa fa-close fa-2x"></i>');
			$('body > nav').fadeToggle('fast', 'linear');
		}
	});
	
});