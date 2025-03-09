let amigos = [];

function agregarNombre() {
    const input = document.getElementById('nombre');
    const nombre = input.value.trim();
    const mensaje = document.getElementById('mensaje');

    if (nombre === '') {
        mensaje.textContent = "Por favor, ingrese un nombre válido";
        return;
    }

    amigos.push(nombre);
    mensaje.textContent = "";
    actualizarLista();
    input.value = "";
}

function actualizarLista() {
    const lista = document.getElementById('listaNombres');
    lista.innerHTML = "";
    amigos.forEach((nombre, index) => {
        const li = document.createElement('li');
        li.textContent = `${index + 1}. ${nombre}`;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    const resultado = document.getElementById('resultado');

    if (amigos.length === 0) {
        resultado.innerHTML = "<p style='color: red;'>No hay nombres para sortear</p>";
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSecreto = amigos[indiceAleatorio];

    resultado.innerHTML = `<h3>El amigo secreto es: ${amigoSecreto}</h3>`;
}
