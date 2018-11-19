$(window).scroll(function() {
	let Ventana = $(this);
	let Cabecera = $('body > header');
	if(Ventana.scrollTop() > Cabecera.height()) {
		Cabecera.css({'position': 'fixed'});
	} else {
		Cabecera.css({'position': 'relative'});
	}
});

$(document).ready(function() {
	
	// Menu principal
	// Por Alejandro Marín Gómez
	
	$('.boton-menu-principal').click(function(e) {
		e.preventDefault();
		let Boton = $(this);
		let Menu = $('body > nav');
		if (Menu.hasClass('active')){
			$('body > div#overlay').remove();
			Menu.removeClass('active');
			Menu.fadeToggle('fast', 'linear');
		} else {
			$('body').prepend('<div id="overlay"></div>');
			Menu.addClass('active');
			Menu.fadeToggle('fast', 'linear');
		}
	});
	
});