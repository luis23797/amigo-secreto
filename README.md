# Proyecto del Amigo Secreto
![Static Badge](https://img.shields.io/badge/Estado%20del%20proyecto-Terminado-green)
<!-- [![GitHub tag](https://img.shields.io/github/tag/luis23797/amigo-secreto?include_prereleases=&sort=semver&color=blue)](https://github.com/luis23797/amigo-secreto/releases/) -->
[![issues - amigo-secreto](https://img.shields.io/github/issues/luis23797/amigo-secreto)](https://github.com/luis23797/amigo-secreto/issues)

<div align="center">

[![View site - GH Pages](https://img.shields.io/badge/View_site-GH_Pages-2ea44f?style=for-the-badge)](https://luis23797.github.io/amigo-secreto/)

</div>
</div>

<!-- toc -->

- [Descripcion del proyecto](#descripcion-del-proyecto)
- [Estado del proyecto](#estado-del-proyecto)
- [Caracteristicas de la aplicacion](#caracteristicas-de-la-aplicacion)
- [Tecnologias utilizadas](#tecnologias-utilizadas)

<!-- tocstop -->

# Descripcion del proyecto
Este es un pequeño proyecto que consiste en la codificacion de una pagina web que se encarga de registrar usuarios y realiza un sorteo entre los usuarios que han sido registrados

# Estado del proyecto
:heavy_check_mark: Proyecto terminado :heavy_check_mark:

# Caracteristicas de la aplicacion

- `Registrar usuarios`: Por medio del input de texto al introducir un nombre y presionar el boton de añadir se agregan usuarios al sorteo
<br> El codigo implementado para registrar los usuarios es el siguiente
```
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
```
Los puntos claves en el codigo anterior es la validación del campo de texto donde se introduce el usuario y el llenado de la lista que contiene usuarios

- `Sortear Usuarios`: Utilizando el boton Sortear Amigo, uno de los usuarios que estan registrados en la lista es seleccionado, sin embargo ese necesario considerar si existen usuarios en la lista
<br> El codigo implementado para esta funcionalidad esta a continuación
```
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
```
En la funcion anterior se valida si existen usuarios en la lista y despues se selecciona por medio de la funcion ```Math.random``` un indice aleatorio para elegir el usuario sorteado
# Tecnologias utilizadas
- HTML/CSS
- JS
