 export function agregarParrafo(){
    const parrafo = document.createElement('p');
    parrafo.innerText = "Texto generado a partir de script";

    return parrafo;
}

 export function agregarArticulo(){
    const elemento = document.createElement('li');
    elemento.innerText = prompt("Inserte un articulo");

    return elemento;
}

 export function crearEstilo(){
    
    const contenedorCss = document.createElement('div');
    contenedorCss.innerHTML = "<b> Miguel Serrano Medina </b>";
    contenedorCss.style.color = "red";
    contenedorCss.style.fontSize = "2rem";
    contenedorCss.id = "estiloso"
    contenedorCss.className = 'nombreApellido';
   return contenedorCss;

}