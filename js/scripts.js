// Por Alejandro Marín Gómez

$(document).ready(function() {
	
	$('a.ModalPersonal').click(function(e) {
		e.preventDefault();
		let Body = $('body');
		let IdModal =  'ModalPersonal_' + Math.random();
		let Nombre = $(this).data('nombre');
		Body.prepend('<div id="' + IdModal + '" style="display: none;">' + Nombre + '</div>');
		/*Overlay.fadeOut(600, function() {
			$(this).remove();
		});*/
	});
	
	$('a#AbrirMenuPrincipal').click(function(e) {
		e.preventDefault();
		let Body = $('body');
		let Menu = $('body > nav');
		Body.prepend('<a href="#" id="nav_overlay" class="overlay CerrarMenuPrincipal" style="display: none;"></a>');
		Menu.fadeToggle('fast', 'linear'); 
		$('a#nav_overlay').fadeIn(300);
	});
	
	$(document).on('click', '.CerrarMenuPrincipal', function(e) {
		e.preventDefault();
		let Menu = $('body > nav');
		let Overlay = $('body > a#nav_overlay');
		Menu.fadeToggle('fast', 'linear');
		Overlay.fadeOut(300, function() {
			$(this).remove();
		});
	});
	
});