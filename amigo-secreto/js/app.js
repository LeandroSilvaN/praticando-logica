let amigos = [];

function adicionar() {
    let adicionarAmigo = document.getElementById("nome-amigo").value.trim();
    if (adicionarAmigo == '') {
        alert("Informe o nome do amigo.");
        return;
    }

 // Normaliza o nome: primeira letra maiúscula, demais minúsculas
    let nomeFormatado = adicionarAmigo.charAt(0).toUpperCase() + adicionarAmigo.slice(1).toLowerCase();


    if (amigos.includes(nomeFormatado)) {
        alert("Nome já adicionado!");
        return;
    }

    amigos.push(nomeFormatado);
    document.getElementById("lista-amigos").textContent = `${amigos.join(', ')}`;
    document.getElementById("nome-amigo").value = "";
}

function sortear() {
    if (amigos.length < 4) {
        alert("Adicione no mínimo 4 amigos!");
        return;
    }

    embaralha(amigos);
    let sorteio = document.getElementById("lista-sorteio");

    for (let i = 0; i < amigos.length; i++) {
        if (i == amigos.length - 1) {
            sorteio.innerHTML = sorteio.innerHTML + amigos[i] + "-->" + amigos[0];
        } else {
            sorteio.innerHTML = sorteio.innerHTML + amigos[i] + "-->" + amigos[i + 1] + "<br>";
        }
    }
}

function embaralha(lista) {

    for (let indice = lista.length; indice; indice--) {

        const indiceAleatorio = Math.floor(Math.random() * indice);

        // atribuição via destructuring
        [lista[indice - 1], lista[indiceAleatorio]] = [lista[indiceAleatorio], lista[indice - 1]];
    }
}

function reiniciar() {
    document.getElementById("nome-amigo").value = "";
    document.getElementById("lista-amigos").textContent = "";
    document.getElementById("lista-sorteio").textContent= "";
    amigos = [];
}