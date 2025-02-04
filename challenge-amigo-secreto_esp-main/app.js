// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
    let nombreInput = document.getElementById('amigo').value;

    if (nombreInput.trim() === "") {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }

    amigos.push(nombreInput);
    document.getElementById('amigo').value = "";
    let lista = document.getElementById('listaAmigos');
    let li = document.createElement('li');
    li.textContent = nombreInput;
    lista.appendChild(li);
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("¡Primero debes agregar al menos un nombre!");
        return;
    }

    let ganador = amigos[Math.floor(Math.random() * amigos.length)];

    document.getElementById('listaAmigos').innerHTML = "";

    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li>¡Tu amigo secreto es: <strong>${ganador}</strong>!</li>`;
}
