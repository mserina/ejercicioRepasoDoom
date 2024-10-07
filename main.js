import { agregarArticulo, agregarParrafo, crearEstilo } from "./funcionalidades.js";



const botonAgregarParrafo = document.querySelectorAll('button')[0];
botonAgregarParrafo.addEventListener('click', function(){
    const contenedor = document.getElementById("contenedor");   
    const parrafo = agregarParrafo();
    contenedor.appendChild(parrafo);
});

const botonAgregarArticulo = document.querySelectorAll('button')[1];
botonAgregarArticulo.addEventListener('click', function(){
    const lista = document.querySelector('ul');
    const elemento = agregarArticulo();
    lista.appendChild(elemento);
});

const botonCrearEstilo = document.querySelectorAll('button')[2];
botonCrearEstilo.addEventListener('click', function(){
    const body = document.querySelector('body');
    const textoEstilo = crearEstilo();
    body.appendChild(textoEstilo);
});


