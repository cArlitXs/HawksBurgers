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
	
	$('a#AbrirMenuPrincipal').click(function(e) {
		e.preventDefault();
		let Menu = $('body > nav');
		let Body = $('body');
		Menu.addClass('active');
		Menu.fadeToggle('fast', 'linear', function() {
			Body.prepend('<div id="nav_overlay" class="overlay CerrarMenuPrincipal" style="display: none;"></div>', function() {
				$('div#nav_overlay').fadeInt(1200);
			});
		});
		
	});
	
	$('.CerrarMenuPrincipal').click(function(e) {
		e.preventDefault();
		let Menu = $('body > nav');
		let Overlay = $('body > div#nav_overlay');
		Menu.removeClass('active');
		Menu.fadeToggle('fast', 'linear');
		Overlay.fadeOut(1200);
	});
	
});