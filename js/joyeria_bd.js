const collares = [
    //Collares
    {
        imagen: 'https://i.ibb.co/4VQMXxk/collares1.jpg'
    },
    {
        imagen: 'https://i.ibb.co/B6x9TYc/collares2.jpg'
    },
    {
        imagen: 'https://i.ibb.co/XFHYbsg/collares3.jpg'
    },
    {
        imagen: 'https://i.ibb.co/5TFtDSr/collares4.jpg'
    },
    {
        imagen: 'https://i.ibb.co/ysN9JF3/collares5.jpg'
    },
    {
        imagen: 'https://i.ibb.co/ZzmvgYh/collares6.jpg'
    },
    {
        imagen: 'https://i.ibb.co/pX6kbM7/collares7.jpg'
    },
    {
        imagen: 'https://i.ibb.co/CWzX9cx/collares8.jpg'
    },
    {
        imagen: 'https://i.ibb.co/WW4xcf2/collares9.jpg'
    }
];

const anillos = [
    {
        imagen: 'https://i.ibb.co/HXSGHRm/anillos1.jpg'
    },
    {
        imagen: 'https://i.ibb.co/TLGXD0J/anillos2.jpg'
    },
    {
        imagen: 'https://i.ibb.co/rwsj4nC/manillas1.jpg'
    },
    {
        imagen: 'https://i.ibb.co/4gd8MFQ/manillas2.jpg'
    },
    {
        imagen: 'https://i.ibb.co/DfSMMx1/manillas3.jpg'
    },
    {
        imagen: 'https://i.ibb.co/fNsBp0Z/manillas4.jpg'
    }
];

const aretes = [
    {
        imagen: 'https://i.ibb.co/Y7VZB9c/aretes1.jpg'
    },
    {
        imagen: 'https://i.ibb.co/fNnqmXk/aretes2.jpg'
    },
    {
        imagen: 'https://i.ibb.co/KxJ7hZV/aretes3.jpg'
    },
    {
        imagen: 'https://i.ibb.co/K9Gc1MZ/aretes4.jpg'
    },
    {
        imagen: 'https://i.ibb.co/5YVR6FM/aretes5.jpg'
    },
    {
        imagen: 'https://i.ibb.co/m66bmdX/aretes6.jpg'
    }
];

const collar = document.querySelector('#productos-collares');
const arete = document.querySelector('#productos-aretes');
const anillo = document.querySelector('#productos-anillos');

//Funciones


// ----------------------COLLARES 
function renderCollares(){
    for (let info of collares){
        let miNodo = document.createElement('div');
        miNodo.classList.add('card-collar');

        let miNodoCardBody = document.createElement('div');
        miNodoCardBody.classList.add('card-body');

        let miNodoTitle = document.createElement('h5');
        miNodoTitle.classList.add('card-title');

        let miNodoImagen = document.createElement('img');
        miNodoImagen.classList.add('img-fluid');
        miNodoImagen.setAttribute('src', info['imagen']);
        
        miNodoCardBody.appendChild(miNodoImagen);
        miNodo.appendChild(miNodoCardBody);
        collar.appendChild(miNodo);
    }
}

renderCollares();

// ----------------------ARETES

function renderAretes(){
    for (let info of aretes){
        let miNodo = document.createElement('div');
        miNodo.classList.add('card-arete');

        let miNodoCardBody = document.createElement('div');
        miNodoCardBody.classList.add('card-body');

        let miNodoTitle = document.createElement('h5');
        miNodoTitle.classList.add('card-title');

        let miNodoImagen = document.createElement('img');
        miNodoImagen.classList.add('img-fluid');
        miNodoImagen.setAttribute('src', info['imagen']);
        
        miNodoCardBody.appendChild(miNodoImagen);
        miNodo.appendChild(miNodoCardBody);
        arete.appendChild(miNodo);
    }
}

renderAretes();

// ----------------------ANILLOS

function renderAnillos(){
    for (let info of anillos){
        let miNodo = document.createElement('div');
        miNodo.classList.add('card-anillo');

        let miNodoCardBody = document.createElement('div');
        miNodoCardBody.classList.add('card-body');

        let miNodoTitle = document.createElement('h5');
        miNodoTitle.classList.add('card-title');

        let miNodoImagen = document.createElement('img');
        miNodoImagen.classList.add('img-fluid');
        miNodoImagen.setAttribute('src', info['imagen']);
        
        miNodoCardBody.appendChild(miNodoImagen);
        miNodo.appendChild(miNodoCardBody);
        anillo.appendChild(miNodo);
    }
}

renderAnillos();


$(document).ready(function () {        


    var BtnCollar = $("#btnCollar");

    var BtnArete = $("#btnArete");

    var BtnAnilloManilla = $("#btnAnilloManilla");

    var collares = $("#contCollares");

    var aretes = $("#contAretes");

    var anillos = $("#contAnillos");


    collares.hide();
    aretes.hide();
    anillos.hide();


    BtnCollar.click(function () {
        collares.show();
        aretes.hide();
        anillos.hide();
        BtnOcultar.show();
    });

    BtnArete.click(function () {
        collares.hide();
        aretes.show();
        anillos.hide();
        BtnOcultar.show();
    });

    BtnAnilloManilla.click(function () {
        collares.hide();
        aretes.hide();
        anillos.show();
        BtnOcultar.show();
    });


    var BtnOcultar = $(".botonHide");

    var ocultar = $(".hidee");

    BtnOcultar.hide();

    BtnOcultar.click(function(){
        collares.hide();
        aretes.hide();
        anillos.hide();
        BtnOcultar.hide();
    });

});