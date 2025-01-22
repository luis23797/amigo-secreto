// Definicion de variables 
let d = document;
let amigos = [];
// Definicion de los elementos a manipular del DOM
const $inputAmigo = d.querySelector("#amigo");
const $listaAmigos = d.querySelector("#listaAmigos")
const $resultado = d.querySelector("#resultado")

// Agregando un evento para accionar el agregar amigo con la tecla Enter
$inputAmigo.addEventListener("keypress",(e)=>{
   if(e.code == 'Enter'){
    agregarAmigo();
   }
})
$inputAmigo.onke
function agregarAmigo(){
    // Funcion que llama a las funciones modulares para hacer el proceso de agregar un amigo
    // Definiendo la validacion para ejecutar o no las funciones modulares
    let tieneAmigo = $inputAmigo.value != ""? true:false;
    if(!tieneAmigo){
        alert("Ingresa un amigo por favor!");
        return;
    }
    // Agregando a la lista de amigos y llamando la funcion para renderizar la lista
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
    //Limpieza del elemento lista para mostrar la lista de amigos
    $listaAmigos.innerHTML = "";

     /* 
    En esta funcion deje entre comentarios otro aproach para la actualizacion de la lista
    el objetivo del otro aproach es ser menos "agresivo con el DOM" aunque solo es considerable
    en situaciones que se hacen actualizaciones de carga grande
    */

    // let lista = d.createDocumentFragment();
    // let li = null;
    // Iteracion en cada uno de los elementos de la lista de amigos para añadirlos
    for (let index = 0; index < amigos.length; index++) {
        // li = d.createElement("li");
        // li.textContent = amigos[index];
        // lista.append(li);
        $listaAmigos.innerHTML += `<li>${index + 1}. ${amigos[index]}</li>`;
    }
    // $listaAmigos.append(lista);
}
function sortearAmigo(){
    // Limpieza del elemento lista que mostrara el resultado
    $resultado.innerHTML = ``;
    let cantidadAmigos = amigos.length;
    // Validacion para ejecutar solo si hay amigos en la lista
    if(cantidadAmigos <1){
        alert("No hay amigos para sortear");
        return;
    }
    // Creando el indice y mostrando el resultado por medio del DOM
    let indiceAleatorio = Math.floor(Math.random() * cantidadAmigos);
    $resultado.innerHTML += `<li>El amigo sorteado es ${amigos[indiceAleatorio]} 🏆</li>`;
    
}