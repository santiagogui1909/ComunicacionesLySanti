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


/**menu hamburguesa */

$(".subMenu").click(function (){
    $(this).children("ul").slideToggle();
});

$("ul").click(function (valor){
    valor.stopPropagation();

});

/**aparecer logo */

// function aparecerLogo() {
//     var html = document.getElementsByTagName("html")[0];
//     var animacionImagen = document.getElementsByClassName("animacionImagen");

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


