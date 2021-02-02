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
    var altura = $('.btn-flotante').offset().top;

    $(window).on('scroll', function () {
        if ($(window).scrollTop() > altura) {
            $('.btn-flotante').addClass('volver-fixed');
        } else {
            $('.btn-flotante').removeClass('volver-fixed');
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


