// Por Alejandro Marín Gómez

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
	
	var Menu = $('body > nav');
	var TamanyoMenu = Menu.width();
	
	Menu.css({
		'margin-right' : 0,
		'width': 0,
		'display': 'block',
	});
	
	$('a#AbrirMenuPrincipal').click(function(e) {
		e.preventDefault();
		let Body = $('body');
		Body.prepend('<a href="#" id="nav_overlay" class="overlay CerrarMenuPrincipal" style="display: none;"></a>');
		//document.getElementById("body > nav").style.width = '20vw';
		//document.getElementById('body > nav').style.marginLeft = '20vw';
		$('body > nav').animate({
			'width': TamanyoMenu,
			'margin-right': '+=' + TamanyoMenu,
		}, 1200);
		$('a#nav_overlay').fadeIn(600);
	});
	
	$(document).on('click', '.CerrarMenuPrincipal', function(e) {
		e.preventDefault();
		let Menu = $('body > nav');
		let Overlay = $('body > a#nav_overlay');
		//Menu.fadeToggle('fast', 'linear');
		Overlay.fadeOut(600, function() {
			$(this).remove();
		});
		Menu.animate({
			'width': '0',
			'margin-right': '-=0',
		}, 1200);
	});
	
});