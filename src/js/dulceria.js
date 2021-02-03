const dataBase = [
    {
        imagen: 'https://i.ibb.co/7GcSN0w/Cajas-Con-Frase1.jpg'
    },
    {
        imagen: 'https://i.ibb.co/8MZz07r/Cajas-Mediana-Monno.jpg'
    },
    {
        imagen: 'https://i.ibb.co/Czgd6hX/Cajas-Medianas-Frases.jpg'
    },
    {
        imagen: 'https://i.ibb.co/Twgg5Z5/Cajas-Pequennas.jpg'
    },
    {
        imagen: 'https://i.ibb.co/VM4VW5p/Cajas-Pequennas-Cuadro.jpg'
    },
    {
        imagen: 'https://i.ibb.co/RYynhb5/Canasta-Cajas-Medianas.jpg'
    },
    {
        imagen: 'https://i.ibb.co/q0CsBhP/Canasta-Mini-Target.jpg'
    },
    {
        imagen: 'https://i.ibb.co/wpqxK06/Mini-Target-Con-Frase.jpg'
    },
    {
        imagen: 'https://i.ibb.co/870Ctjc/Targets-Frases-Horizontal.jpg'
    },
    {
        imagen: 'https://i.ibb.co/mz2Smc8/Targets-Medianas.jpg'
    },
    {
        imagen: 'https://i.ibb.co/gyD6jHB/Tarjetas-Con-Frase-Horizontal.jpg'
    },
    {
        imagen: 'https://i.ibb.co/5vsvFVF/Tarjetas-Frases1.jpg'
    },
    {
        imagen: 'https://i.ibb.co/G2mypSy/Vaso-Con-Target1.jpg'
    },
    {
        imagen: 'https://i.ibb.co/K9Q28rn/Vaso-Con-Target2.jpg'
    },
    {
        imagen: 'https://i.ibb.co/w6hxk49/Vaso-Con-Target3.jpg'
    },
    {
        imagen: 'https://i.ibb.co/HF8K8gP/Vaso-Con-Target4.jpg'
    },
    {
        imagen: 'https://i.ibb.co/vYJvXjp/Vaso-Con-Target5.jpg'
    },
    {
        imagen: 'https://i.ibb.co/tHmw8qH/Vaso-Con-Target6.jpg'
    },
    {
        imagen: 'https://i.ibb.co/Mkc7NKh/Vaso-Con-Target7.jpg'
    },   
];

const dulceria = document.querySelector('#products-dulceria');

//Funcion 

function renderDulceria(){
    for (let info of dataBase){
        let miNodo = document.createElement('div');
        miNodo.classList.add('card-item');

        let miNodoCardBody = document.createElement('div');
        miNodoCardBody.classList.add=('card-body');

        let miNodoTitle = document.createElement('h5');
        miNodoTitle.classList.add('card-title');

        let miNodoImagen = document.createElement('img');
        miNodoImagen.classList.add('img-fluid');
        miNodoImagen.setAttribute('src', info['imagen']);

        miNodoCardBody.appendChild(miNodoImagen);
        miNodo.appendChild(miNodoCardBody);
        dulceria.appendChild(miNodo);
    }
}

renderDulceria();