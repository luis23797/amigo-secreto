let d = document;
let amigos = [];

const $inputAmigo = d.querySelector("#amigo");
const $listaAmigos = d.querySelector("#listaAmigos")


// Agregando un evento para accionar el agregar amigo con la tecla Enter
$inputAmigo.addEventListener("keypress",(e)=>{
   if(e.code == 'Enter'){
    agregarAmigo();
   }
})
$inputAmigo.onke
function agregarAmigo(){
    // Funcion que llama a las funciones modulares para hacer el proceso de agregar un amigo
    let tieneAmigo = $inputAmigo.value != ""? true:false;
    if(!tieneAmigo){
        alert("Ingresa un amigo por favor!");
        return;
    }
    amigos.push(obtenerValorInput());
    actualizarListaAmigos();
}
function obtenerValorInput(){
    // Obtencion del string contenido en el Input y limpieza del mismo
    let amigo = $inputAmigo.value;
    $inputAmigo.value = "";
    return amigo;
}
function actualizarListaAmigos(){
    // Actualizacion por medio del DOM para renderizar la lista de amigos actualizada
    $listaAmigos.innerHTML = "";

     /* 
    En esta funcion deje entre comentarios otro aproach para la actualizacion de la lista
    el objetivo del otro aproach es ser menos "agresivo con el DOM" aunque solo es considerable
    en situaciones que se hacen actualizaciones de carga grande
    */

    // let lista = d.createDocumentFragment();
    // let li = null;
    for (let index = 0; index < amigos.length; index++) {
        // li = d.createElement("li");
        // li.textContent = amigos[index];
        // lista.append(li);
        $listaAmigos.innerHTML += `<li>${index + 1}. ${amigos[index]}</li>`;
    }
    // $listaAmigos.append(lista);
}