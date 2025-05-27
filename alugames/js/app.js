let jogosAlugados = 0;

function contarEExibirJogosAlugados() {
    console.log(`Total de jogos alugados: ${jogosAlugados}`);
}

function alterarStatus(id) {
    let gameClicado = document.getElementById(`game-${id}`);

    let imagem = gameClicado.querySelector(".dashboard__item__img");
    let botao = gameClicado.querySelector(".dashboard__item__button");
    let nomeJogo = gameClicado.querySelector(".dashboard__item__name");

    if (botao.classList.contains("dashboard__item__button--return") && imagem.classList.contains("dashboard__item__img--rented")) {

        if (confirm(`Você quer devolver o jogo ${nomeJogo.textContent}.`)) {
            alert(`Você devolveu o jogo ${nomeJogo.textContent}.`);
        } else {
            alert(`Jogo não devolvido.`);
            return;
        }

        imagem.classList.remove("dashboard__item__img--rented");
        botao.classList.remove("dashboard__item__button--return");
        botao.innerHTML = "Alugar";
        jogosAlugados--;
    } else {
        imagem.classList.add("dashboard__item__img--rented");
        botao.classList.add("dashboard__item__button--return");
        botao.innerHTML = "Devolver";
        jogosAlugados++;
        alert(`Você alugou o jogo ${nomeJogo.textContent}.`);
    }
    contarEExibirJogosAlugados();
}

document.addEventListener('DOMContentLoaded', function () {
    jogosAlugados = document.querySelectorAll('.dashboard__item__img--rented').length;
    contarEExibirJogosAlugados();
});