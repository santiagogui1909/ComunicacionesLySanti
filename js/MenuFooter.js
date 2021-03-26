/**Scroll del menu */

$(document).ready(function () {
    var altura = $('.menu').offset().top;

    $(window).on('scroll', function () {
        if ($(window).scrollTop() > altura) {
            $('.menu').addClass('menu-fixed');
        } else {
            $('.menu').removeClass('menu-fixed');
        }
    });

});

/**Boton Volver */

$(document).ready(function () {
    var altura = $('.return-up').offset().top;

    $(window).on('scroll', function () {
        if ($(window).scrollTop() > altura) {
            $('.return-up').addClass('volver-fixed');
        } else {
            $('.return-up').removeClass('volver-fixed');
        }
    });

});

$(document).ready(function () {
    var altura = $('.redes-sociales').offset().top;

    $(window).on('scroll', function () {
        if ($(window).scrollTop() > altura) {
            $('.redes-sociales').addClass('volver-fixed');
        } else {
            $('.redes-sociales').removeClass('volver-fixed');
        }
    });

});

$(document).ready(function(){
    var ir_a = $(".desplazar");

    ir_a.click(function (evento){

        evento.preventDefault();
        $("body,html").animate({
            scrollTop: $(this.hash).offset().top,
        },1000);
    });
});


/**menu hamburguesa */

$(".subMenu").click(function (){
    $(this).children("ul").slideToggle();
});

$("ul").click(function (valor){
    valor.stopPropagation();

});


(function($) {
	"use strict"

	// Mobile Nav toggle
	$('.menu-toggle > a').on('click', function (e) {
		e.preventDefault();
		$('#responsive-nav').toggleClass('active');
	})

	// Fix cart dropdown from closing
	$('.cart-dropdown').on('click', function (e) {
		e.stopPropagation();
	});


})(jQuery);

/**slider function */

$(document).ready(function () {

    $('.flexslider').flexslider({
        prevText: "",
        nextText: "",
        pauseOnAction: false,
        slideshowSpeed: 2500,
        touch: true
    });
});

/**formulario */

$(document).ready(function(){

    $('#btnSend').click(function(){

        var errores = '';

        // Validado Nombre ==============================
        if( $('#names').val() == '' ){
            errores += '<p>Escriba un nombre</p>';
            $('#names').css("border-bottom-color", "#F14B4B")
        } else{
            $('#names').css("border-bottom-color", "#d1d1d1")
        }

        // Validado Correo ==============================
        if( $('#email').val() == '' ){
            errores += '<p>Ingrese un correo</p>';
            $('#email').css("border-bottom-color", "#F14B4B")
        } else{
            $('#email').css("border-bottom-color", "#d1d1d1")
        }

        // Validado Mensaje ==============================
        if( $('#mensaje').val() == '' ){
            errores += '<p>Escriba un mensaje</p>';
            $('#mensaje').css("border-bottom-color", "#F14B4B")
        } else{
            $('#mensaje').css("border-bottom-color", "#d1d1d1")
        }

        // ENVIANDO MENSAJE ============================
        if( errores == '' == false){
            var mensajeModal = '<div class="modal_wrap">'+
                                    '<div class="mensaje_modal">'+
                                        '<h3>Errores encontrados</h3>'+
                                        errores+
                                        '<span id="btnClose">Cerrar</span>'+
                                    '</div>'+
                                '</div>'

            $('body').append(mensajeModal);
        }

        // CERRANDO MODAL ==============================
        $('#btnClose').click(function(){
            $('.modal_wrap').remove();
        });
    });

});


    // ScrollReveal().reveal('.prod-animados', { reset: true });

    window.sr = ScrollReveal();

    sr.reveal('.prod-animados',{
        duration: 1200,
        origin: 'top',
        distance: '-200px'
    });


    window.sr = ScrollReveal();

    sr.reveal('.info-ComunicacionesLySanti',{
        duration: 3000,
        origin: 'right',
        distance: '-500px'
    });

    window.sr = ScrollReveal();

    sr.reveal('.info__separator',{
        duration: 3000,
        origin: 'rigth',
        distance: '-500px'
    });


/**aparecer logo */

// function aparecerLogo() {
//     var html = document.getElementsByTagName("html")[0];
//     var animacionImagen = document.getElementsByClassName("animado");

//     document.addEventListener("wheel", function() {
//         var topvent = html.scrollTop;

//         for (var i = 0; i < animacionImagen.length; i++) {
//             var altura = animacionImagen[i].offsetTop;

//             if (topvent > altura ) {
//                 animacionImagen[i].style.opacity = 1;
//             } else {
//                 animacionImagen[i].style.opacity = 0;
//             }
//         } 
//     });
// }

// aparecerLogo();


