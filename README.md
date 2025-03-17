<h1 align="center"> Challengue del Amigo Secreto </h1>

## Descripción del Proyecto

Proyecto desarrollado como parte de la formación en desarrollo web de la beca Oracle Next One.

## Funcionamiento

1. El usuario ingresa un nombre en el campo de entrada y presiona el botón "Agregar Amigo".
2. El nombre se agrega a una lista visible en la página.
3. Si el usuario intenta agregar un nombre vacío, se muestra una alerta.
4. Al presionar el botón "Sortear Amigo", se selecciona un nombre al azar de la lista y se muestra el resultado.
5. Si la lista está vacía, el sorteo no se ejecuta.

## Código y Explicación

### Selección de elementos HTML
```javascript
const inputAmigo = document.getElementById("amigo");
const listaAmigos = [];
const ulListaAmigos = document.getElementById("listaAmigos");
const ulResultado = document.getElementById("resultado");
const btnAgregar = document.getElementById("agregarAmigo");
```
Se seleccionan los elementos HTML necesarios: el campo de entrada, la lista de amigos, el área de resultado y el botón para agregar amigos. También se inicializa un arreglo vacío donde se almacenarán los nombres.

### Función para actualizar la lista en pantalla
```javascript
function actualizarLista() {
    ulListaAmigos.innerHTML = "";
    for (const amigo of listaAmigos) {
        const li = document.createElement("li");
        li.textContent = amigo;
        ulListaAmigos.appendChild(li);
    }
}
```
Esta función borra el contenido actual de la lista en la pantalla y recorre el arreglo `listaAmigos`, agregando cada nombre a la lista visible.

### Función para agregar un amigo
```javascript
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
```
Esta función obtiene el valor ingresado por el usuario, elimina espacios en blanco al inicio y al final y verifica que no esté vacío. Si el campo está vacío, se muestra una alerta. Si tiene contenido, el nombre se agrega al arreglo `listaAmigos`, se actualiza la lista en pantalla y se borra el campo de entrada.

### Evento para el botón de agregar amigo
```javascript
btnAgregar.addEventListener("click", agregarAmigo);
```
Se añade un evento al botón "Agregar Amigo" para que ejecute la función `agregarAmigo` cuando se presione.

### Función para sortear un amigo secreto
```javascript
function sortearAmigo() {
    if (listaAmigos.length === 0) {
        return;
    }
    const random = Math.floor(Math.random() * listaAmigos.length);
    const amigoSecreto = listaAmigos[random];
    ulResultado.innerHTML = `<li>El amigo secreto es: ${amigoSecreto}</li>`;
}
```
Esta función verifica si la lista `listaAmigos` tiene elementos. Si está vacía, no hace nada. Si hay nombres en la lista, genera un índice aleatorio dentro del rango del arreglo y selecciona un nombre al azar, mostrando el resultado en la pantalla.


### Tecnologia utilizadas:

- Java
- HTML
- CSS
