
//array inicializado
let nombres = [];


function agregarAmigo() {
//intento alamacenar los nombres que se ingresan    
    let valorini = document.getElementById("amigo");
    let nombre = valorini.value.trim();
//almaceno en lista los nombres que se mostrarán en el espacio del elemento ul
    let lista = document.getElementById("listaAmigos");
//acá voy a mostrar el nombre sorteado
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = "";
//verifico si tiene las letras válidas
    if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ ]+$/.test(nombre) || nombre === "") {
        alert("Ingrese un nombre válido (solo letras).");
        return;
    }
//se van agregando nombreas al array 
    nombres.push(nombre);
//el elemento li es donde se va a ir guardando el nombre para que se vea en el html
    let li = document.createElement("li");
    li.textContent = nombre;
//a partir de quí ya se ve en la página
    lista.appendChild(li);
//reinicia el nombre para que se agregue otro nombre sin tener que borrar manualmente
    valorini.value = "";
}
function sortearAmigo() {
//verifico si está vacío
    if (nombres.length === 0) {
        alert("Agrega nombres antes de sortear.");
        return;
    }
//con un número entero (Math.floor()) y del tamaño del array, puedo sortear
    let indiceGanador = Math.floor(Math.random() * nombres.length);
    let ganador = nombres[indiceGanador];
//elimino la lista a la vista y deja que se vea el nombre sorteado
    document.getElementById("listaAmigos").innerHTML = "";
    document.getElementById("resultado").innerHTML = `<li>🎉 El amigo sorteado es: ${ganador} 🎉</li>`;
//borra los nombres alamcenados para que se pueda sortear de nuevo
    nombres = [];
}
