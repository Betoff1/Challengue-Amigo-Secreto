const inputAmigo = document.getElementById("amigo");
const listaAmigos = [];
const ulListaAmigos = document.getElementById("listaAmigos");
const ulResultado = document.getElementById("resultado");
const btnAgregar = document.getElementById("agregarAmigo");

function actualizarLista() {
    ulListaAmigos.innerHTML = "";
    for (const amigo of listaAmigos) {
        const li = document.createElement("li");
        li.textContent = amigo;
        ulListaAmigos.appendChild(li);
    }
}

function agregarAmigo() {
    const nombre = inputAmigo.value.trim();
    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    listaAmigos.push(nombre);
    actualizarLista();
    inputAmigo.value = "";
}

btnAgregar.addEventListener("click", agregarAmigo);

function sortearAmigo() {
    if (listaAmigos.length === 0) { // Validar que haya amigos disponibles
        return;
    }
    
    const random = Math.floor(Math.random() * listaAmigos.length); // Generar un índice aleatorio
    const amigoSecreto = listaAmigos[random]; // Obtener el nombre sorteado
    ulResultado.innerHTML = `<li>El amigo secreto es: ${amigoSecreto}</li>`; // Mostrar el resultado
}
