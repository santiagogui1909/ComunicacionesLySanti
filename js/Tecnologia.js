
const celulares = [
{
	nombre: 'Galaxy A30s',
	imagen: 'https://i.ibb.co/kSDBTnB/galaxya30s.jpg'
},
{
	nombre: 'Galaxy A20s',
	imagen: 'https://i.ibb.co/5120x1b/galaxya20s.jpg'
},
{
	nombre: 'ZTE Blade L130',
	imagen: 'https://i.ibb.co/DDrx38M/ZTE.jpg'
},
{
	nombre: 'Cubot X19',
	imagen: 'https://i.ibb.co/X2bQdYS/cubot.jpg'
},
{
	nombre: 'Alcatel',
	imagen: 'https://i.ibb.co/CPvFbz7/Alcatel.jpg'
},
{
	nombre: 'Lanix',
	imagen: 'https://i.ibb.co/x36qKvt/lanix.jpg'
},
{
	nombre: 'Galaxy J1 Mini Prime',
	imagen: 'https://i.ibb.co/wYdx8dx/galaxyj1.jpg'
	
},
{
	nombre: 'Nokia',
	imagen: 'https://i.ibb.co/T1tQtvk/nokia.jpg'
},
{
	nombre: 'Nokia',
	imagen: 'https://i.ibb.co/f0zTnWG/nokia1.jpg'
},
{
	nombre: 'Ipro',
	imagen: 'https://i.ibb.co/bQg9h1Q/ppo.jpg'
},
{
	nombre: 'Servo Gris',
	imagen: 'https://i.ibb.co/7k3Q1kM/servo.jpg'
},
{
	nombre: 'Corn Negro',
	imagen: 'https://i.ibb.co/Hn2njtc/corn.jpg'
},
{
	nombre: 'Corn',
	imagen: 'https://i.ibb.co/7zx7QSq/corn2.jpg'
},
{
	nombre: 'Corn Gris',
	imagen: 'https://i.ibb.co/7nQnrMF/corn4.jpg'
},
{
	nombre: 'Corn',
	imagen: 'https://i.ibb.co/7zMpFbj/corn5.jpg'
}];

const accesorios = [
	{
		nombre: 'Audinofonos Inalambricos i12',
		imagen: 'https://i.ibb.co/7Vtwt3n/Audinofonos-Inalambricos-i12.jpg'
	},
	{
		nombre: 'Audifonos Inalambricos i12',
		imagen: 'https://i.ibb.co/fF461fx/Audifonos-Inalambricos-i12.jpg'
	},
	{
		nombre: 'Audifonos Inalambricos',
		imagen: 'https://i.ibb.co/jMNxpVq/Audifonos-inalambricos.jpg'
	},
	{
		nombre: 'Audifono Inalambrico i7',
		imagen: 'https://i.ibb.co/dQKs3HD/Audifono-inalambrico-i7.jpg'
	},
	{
		nombre: 'Audifonos Fly Stereo Handsfree',
		imagen: 'https://i.ibb.co/3C4G2Cc/Audifonos-Fly-Stereo-Handsfree.jpg'
	},
	{
		nombre: 'Audifonos Super Bass Sans Fil',
		imagen: 'https://i.ibb.co/GxcKD1m/Audifonos-Super-Bass-Sans-Fil.jpg'
	},
	{
		nombre: 'Cargador Baterias Universal USB',
		imagen: 'https://i.ibb.co/dJCtLK3/Cargador-Baterias-Universal-USB.jpg'
	},
	{
		nombre: 'Cargador Carga Rapida',
		imagen: 'https://i.ibb.co/sKxPBrr/Cargador-Carga-Rapida.jpg'
	},
	{
		nombre: 'Cargador Generico Tipo Punto',
		imagen: 'https://i.ibb.co/BK5r2Ts/Cargador-De-Punto.jpg'
		
	},
	{
		nombre: 'Cargador Economico Fly Tipo A',
		imagen: 'https://i.ibb.co/L0WkgKW/Cargador-Economico-Fly-Tipo-A.jpg'
	},
	{
		nombre: 'Cargador Fly Energy 1.2A',
		imagen: 'https://i.ibb.co/D8cQFmT/Cargador-Fly-Energy-1-2-A.jpg'
	},
	{
		nombre: 'Cargador MTF Travel Charger',
		imagen: 'https://i.ibb.co/cxPgFKS/Cargador-MTF.jpg'
	},
	{
		nombre: 'Cargador Samsung Original',
		imagen: 'https://i.ibb.co/RYMRDB7/Cargador-Samsung-Original.jpg'
	},
	{
		nombre: 'Cargador Spartan Micro A',
		imagen: 'https://i.ibb.co/Ln5kswQ/Cargador-Spartan-Micro-A.jpg'
	},
	{
		nombre: 'Cargador Fly Energy 3.4 A',
		imagen: 'https://i.ibb.co/MPbvyy1/Cargador-Fly-Energy-3-4-A.jpg'
	},
	{
		nombre: 'Cargador Generico Travel',
		imagen: 'https://i.ibb.co/G2ct54R/Cargador-Generico-Travel.jpg'
	},
	{
		nombre: 'Cargador-Generico Tipo A',
		imagen: 'https://i.ibb.co/nnhTVLK/Cargador-Generico.jpg'
	},
	{
		nombre: 'Cable Fast Data Micro A',
		imagen: 'https://i.ibb.co/zrbCN25/Cable-Fast-Data-Micro-A.jpg'
	},
	{
		nombre: 'Cable 7 Fly USB Micro A',
		imagen: 'https://i.ibb.co/q15wyyW/Cable-Fly-USB-Micro-A.jpg'
	},
	{
		nombre: 'Cable Fly Energy Fast 2.4 A',
		imagen: 'https://i.ibb.co/LdpSwpg/Cable-Fast-2-4-A.jpg'
	},
	{
		nombre: 'Memorias Micro Kingston',
		imagen: 'https://i.ibb.co/jgFTXMN/Memorias-Micro-Kingston.jpg'
	},
	{
		nombre: 'Memorias USB Grabadas',
		imagen: 'https://i.ibb.co/P6FcBWf/Memorias-Usb.jpg'
	},
	{
		nombre: 'Adaptadores Micro USB',
		imagen: 'https://i.ibb.co/ncGYJvm/Adaptadores-Micro-USB.jpg'
	},
	{
		nombre: 'Mouse Unitec Por Cable',
		imagen: 'https://i.ibb.co/gMBgw1p/Mouse-Unitec.jpg'
	},
];

const parlantes = [
	{
		nombre: 'Parlante MS 1618BT',
		imagen: 'https://i.ibb.co/HLZCrLm/parlante.jpg'
	},
	{
		nombre: 'Parlante MS 1622BT',
		imagen: 'https://i.ibb.co/zZPkyQd/parlante1.jpg'
	},
	{
		nombre: 'Parlante MS 1633BT',
		imagen: 'https://i.ibb.co/K9YdZDL/parlante2.jpg'
	},
	{
		nombre: 'Parlante MS 513BT Speaker',
		imagen: 'https://i.ibb.co/jJcG5L8/parlante3.jpg'
	},
	{
		nombre: 'Parlante KTS-1085 Con Control',
		imagen: 'https://i.ibb.co/z7W1pzY/parlante4.jpg'
	},
	{
		nombre: 'Parlante EN forma de huevo',
		imagen: 'https://i.ibb.co/vDcB98x/parlante5.jpg'
	},
	{
		nombre: 'Parlante Wireless Speaker',
		imagen: 'https://i.ibb.co/Gxs1HGy/parlante6.jpg'
	},
	{
		nombre: 'Parlante X-Bass Mk-16 BT',
		imagen: 'https://i.ibb.co/G2MV8vM/parlante7.jpg'
	},
	{
		nombre: 'Parlante Wireless Speaker',
		imagen: 'https://i.ibb.co/Gxs1HGy/parlante6.jpg'
	},
	{
		nombre: 'Parlante X-Bass Mk-16 BT',
		imagen: 'https://i.ibb.co/G2MV8vM/parlante7.jpg'
	},
	{
		nombre: 'Parlantes Para Computador Omega',
		imagen: 'https://i.ibb.co/M7XhyWV/parlante8.jpg'
		
	},
	{
		nombre: 'Parlante Para Computador Genius',
		imagen: 'https://i.ibb.co/YcZDD23/parlante9.jpg'
	},
	{
		nombre: 'Parlantes Para Computador Kisonli',
		imagen: 'https://i.ibb.co/0sjTpMC/parlante10.jpg'
	},
];

const celular = document.querySelector("#celulares");
const accesorio = document.querySelector("#accesorios");
const parlante = document.querySelector("#parlantes")

/**funcion de los accesorios */
function renderCelulares() {
    for (let info of celulares) {

        // Estructura1
        let miNodo = document.createElement('div');
        miNodo.classList.add('card-celulares');
        // Body
        let miNodoCardBody = document.createElement('div');
        miNodoCardBody.classList.add('product-body');
        // Titulo
        let miNodoTitle = document.createElement('h5');
        miNodoTitle.classList.add('product-name');
        miNodoTitle.textContent = info['nombre'];

        // Imagen
        let miNodoImagen = document.createElement('img');
        miNodoImagen.classList.add('product-img');
        miNodoImagen.setAttribute('src', info['imagen']);

        miNodoCardBody.appendChild(miNodoImagen);
        miNodoCardBody.appendChild(miNodoTitle);

        miNodo.appendChild(miNodoCardBody);
        celular.appendChild(miNodo);

    }
}

/**funcion de los accesorios */
function renderAccesorios() {
    for (let info of accesorios) {

        // Estructura1
        let miNodo = document.createElement('div');
        miNodo.classList.add('card-accesorios');
        // Body
        let miNodoCardBody = document.createElement('div');
        miNodoCardBody.classList.add('product-body');
        // Titulo
        let miNodoTitle = document.createElement('h5');
        miNodoTitle.classList.add('product-name');
        miNodoTitle.textContent = info['nombre'];

        // Imagen
        let miNodoImagen = document.createElement('img');
        miNodoImagen.classList.add('product-img');
        miNodoImagen.setAttribute('src', info['imagen']);

        miNodoCardBody.appendChild(miNodoImagen);
        miNodoCardBody.appendChild(miNodoTitle);

        miNodo.appendChild(miNodoCardBody);
        accesorio.appendChild(miNodo);

    }
}

/**funcion de los Parlantes */
function renderParlantes() {
    for (let info of parlantes) {

        // Estructura1
        let miNodo = document.createElement('div');
        miNodo.classList.add('card-parlantes');
        // Body
        let miNodoCardBody = document.createElement('div');
        miNodoCardBody.classList.add('product-body');
        // Titulo
        let miNodoTitle = document.createElement('h5');
        miNodoTitle.classList.add('product-name');
        miNodoTitle.textContent = info['nombre'];

        // Imagen
        let miNodoImagen = document.createElement('img');
        miNodoImagen.classList.add('product-img');
        miNodoImagen.setAttribute('src', info['imagen']);

        miNodoCardBody.appendChild(miNodoImagen);
        miNodoCardBody.appendChild(miNodoTitle);

        miNodo.appendChild(miNodoCardBody);
        parlante.appendChild(miNodo);

    }
}

renderCelulares();

renderAccesorios();

renderParlantes();

// aparecer y desaparecer

$(document).ready(function () {        


    var btnCelulares = $("#btnCelular");

    var btnAccesorios = $("#BtnAccesorios");

    var btnParlantes = $("#BtnParlantes");

    var celulares = $("#celular");

    var accesorios = $("#AccesoriosTecnologicos");

    var parlante = $("#Parlante");


    celulares.hide();
    accesorios.hide();
    parlante.hide();


    btnCelulares.click(function () {
        celulares.show();
        accesorios.hide();
        parlante.hide();
    });

    btnAccesorios.click(function () {
        celulares.hide();
        accesorios.show();
        parlante.hide();
    });

    btnParlantes.click(function () {
        celulares.hide();
        accesorios.hide();
        parlante.show();
    });

});


(function($) {
	"use strict"

	// Products Slick
	$('.products-slick').each(function() {
		var $this = $(this),
				$nav = $this.attr('data-nav');

		$this.slick({
			slidesToShow: 4,
			slidesToScroll: 1,
			autoplay: true,
			infinite: true,
			speed: 400,
			dots: false,
			arrows: true,
			appendArrows: $nav ? $nav : false,
			responsive: [{
	        breakpoint: 991,
	        settings: {
	          slidesToShow: 2,
	          slidesToScroll: 1,
	        }
	      },
	      {
	        breakpoint: 480,
	        settings: {
	          slidesToShow: 1,
	          slidesToScroll: 1,
	        }
	      },
	    ]
		});
	});
	
	// Product imgs Slick
  $('#product-imgs').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    centerMode: true,
    focusOnSelect: true,
		centerPadding: 0,
		vertical: true,
    asNavFor: '#product-main-img',
		responsive: [{
        breakpoint: 991,
        settings: {
					vertical: false,
					arrows: false,
					dots: true,
        }
      },
    ]
  });

	// Product img zoom
	var zoomMainProduct = document.getElementById('product-main-img');
	if (zoomMainProduct) {
		$('#product-main-img .product-preview').zoom();
	}

})(jQuery);
