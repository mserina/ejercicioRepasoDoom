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

    document.body.appendChild(crearEstilo());
    document.querySelector('button[disabled]').disabled=false;
});


function changeStyle(){
    let botonCambiarCss = document.getElementById('botonCambiarCss');
    let divEstiloso = document.getElementById('estiloso');

    if(divEstiloso.style.color == "red"){
        botonCambiarCss.innerText = "Cambiar a rojo";
        divEstiloso.style.color = "blue";
        divEstiloso.style.fontSize = "2rem";
    }
    else{
        botonCambiarCss.innerText = "Cambiar a azul";
        divEstiloso.style.color = "red";

    }
}


function cambiaTodoColor(){
    let botonCambiarCss = document.getElementById('botonCambiarCss');
    let arrayDiv = document.querySelectorAll('.nombreApellido');
    //Esta funcion aplica lo que esta dentro de los corchetes a cada elemento div que se vaya creando
    arrayDiv.forEach(div =>{
        if(div.style.color == "red"){
            botonCambiarCss.innerText = "Cambiar a rojo";
            div.style.color = "blue";
            div.style.fontSize = "2rem";
        }
        else{
            botonCambiarCss.innerText = "Cambiar a azul";
            div.style.color = "red";
            div.style.fontSize = "2rem";
    
        }
    });
}

window.changeStyle = cambiaTodoColor;