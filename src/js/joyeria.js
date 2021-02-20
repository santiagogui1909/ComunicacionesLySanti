//Carga de la pagina 
window.onload = function(){
    var contenedor = document.getElementById('contenedor_carga');

    contenedor.style.visibility = 'hidden';
    contenedor.style.opacity = '0';
}

// Slider Automatico - Manual.
const slider = document.querySelector("#slider");
let sliderSection = document.querySelectorAll(".slider__section");
let sliderSectionLast = sliderSection[sliderSection.length -1];

const btnLeft = document.querySelector("#btn-left");
const btnRight = document.querySelector("#btn-right");

slider.insertAdjacentElement('afterbegin', sliderSectionLast);

function Next(){
    let sliderSectionFirst = document.querySelectorAll(".slider__section")[0];
    slider.style.marginLeft = "-200%";
    slider.style.transition = "all 0.5s";
    setTimeout(function(){
        slider.style.transition = "none";
        slider.insertAdjacentElement('beforeend', sliderSectionFirst);
        slider.style.marginLeft = "-100%";
    }, 500);
}

function Back(){
    let sliderSection = document.querySelectorAll(".slider__section");
    let sliderSectionLast = sliderSection[sliderSection.length -1];
    slider.style.marginLeft = "0";
    slider.style.transition = "all 0.5s";
    setTimeout(function(){
        slider.style.transition = "none";
        slider.insertAdjacentElement('afterbegin', sliderSectionLast);
        slider.style.marginLeft = "-100%";
    }, 500);
}

btnRight.addEventListener('click', function(){
    Next();
});

btnLeft.addEventListener('click', function(){
    Back();
});

setInterval( function(){
    Next();
}, 6000);


// Animaciones al scrollear
// let animado = document.querySelectorAll(".prod-animados");

// function showScroll(){
//     let scrollTop= document.documentElement.scrollTop;
//     for (var i = 0; i < animado.length; i++){
//         let alturaAnimado = animado[i].offsetTop;
//         if (alturaAnimado -500 < scrollTop){
//             animado[i].style.opacity = 1;
//             animado[i].classList.add("mostrar__prod-animados")
//         }
//     }
// }

// window.addEventListener('scroll', showScroll);

window.sr = ScrollReveal();

    sr.reveal('.prod-animados',{
        duration: 1200,
        origin: 'top',
        distance: '-200px'
    });

    // ScrollReveal().reveal('.prod-animados', { reset: true });


    window.sr = ScrollReveal();

    sr.reveal('.info__joyeria',{
        duration: 3000,
        origin: 'right',
        distance: '-500px'
    });

    window.sr = ScrollReveal();

    sr.reveal('.info__separator',{
        duration: 3000,
        origin: 'left',
        distance: '-500px'
    });