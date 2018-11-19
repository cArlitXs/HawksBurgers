/*

$(window).scroll(function() {
	if($(document).width() > 900) {
		$(".frozen_top").css("top",Math.max(130,$(this).scrollTop()));
		if($(this).scrollTop() > 135) {
		$(".frozen_top").css("margin-top","-95px");
		$("#task_flyout").css("top","53px");
		} else {
		$(".frozen_top").css("margin-top","-5px");
		$("#task_flyout").css("top","33px");
		}
	}
});

*/

$(document).ready(function() {
	
	// Menu principal
	// Por Alejandro Marín Gómez
	
	$('#icono-menu').click(function(e) {
		e.preventDefault();
		let Boton = $(this);
		let Menu = $('body > nav');
		if (Boton.hasClass('active')){
			Boton.removeClass('active');
			Boton.css('background-image', 'url("' + BaseUrl + '/img/burguer.svg")');
			Boton.empty();
			Menu.fadeToggle('fast', 'linear');
		} else {
			Boton.addClass('active');
			Boton.css('background-image', 'none');
			Boton.html('<i class="fa fa-close fa-2x"></i>');
			Menu.fadeToggle('fast', 'linear');
		}
	});
	
});