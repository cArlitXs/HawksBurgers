// Por Alejandro Marín Gómez

$(document).ready(function() {
	
	$('a.SumarCarrito').click(function(e) {
		e.preventDefault();
		let BotonCarrito = $('a#BotonCarro');
		let CantidadProductos = BotonCarrito.find('span');
		let Cantidad = 1;
		if(CantidadProductos.length == 0) {
			BotonCarrito.append('<span>' + Cantidad + '</span>');
		} else {
			Cantidad = parseInt(CantidadProductos.text()) + 1;
			CantidadProductos.text(Cantidad);
		}
	});
	
	$('a.ModalPersonal').click(function(e) {
		e.preventDefault();
		let Body = $('body');
		let Boton = $(this);
		let Nombre = Boton.data('nombre');
		let Puesto = Boton.data('puesto');
		let Contenido = Boton.data('contenido');
		let Contacto = Boton.data('contacto');
		Body.prepend('<div class="modal">'
		+ '<a href="#" class="close background"></a>'
		+ '<div class="modal-content">'
		+ '<div class="modal-header" style="padding-top:25px; padding-bottom:25px;">'
		+ '<a href="#" class="close close_button">&times;</a>'
		+ '<h4><i class="fa fa-user"></i> ' + Nombre + '</h4>'
		+ '<p><i>' + Puesto + '</i></p>'
		+ '</div>'
		+ '<div class="modal-body"  style="padding-top:25px; padding-bottom:25px;">'
		+ '<p>' + Contenido + '</p>'
		+ '</div>'
		+ '<div class="modal-footer" style="padding-top:25px; padding-bottom:25px;">'
		+ '<h6><i class="fa fa-envelope"></i> Contact: <a href="mailto:' + Contacto + '" style="color: #fff;">' + Contacto + '</a></h6>'
		+ '</div>'
		+ '</div>'
		+ '</div>');
	});
	
	$(document).on('click', '.modal .close', function(e) {
		e.preventDefault();
		let Modal = $(this).parents('.modal');
		Modal.hide(0, function() {
			Modal.remove();
		});
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