//Creo una función que se ejecutara cuando hago click en el boton
function muestra_oculta(id) {
    //declaro la funcion y paso por parametro el seletor de referencia que quiero ocultar/mostrar
    let div= document.getElementById(id);
     if (div.style.display=="none"){
    div.style.display = "flex";
    }
    else{
    div.style.display="none";
    }
}