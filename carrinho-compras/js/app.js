let total = 0;
limpar();

function adicionar() {
    //recuperar valores nome do produto, quantidade e valor
    let produto = document.getElementById("produto").value;
    let nomeProduto = produto.split("-")[0];
    let valorUnitario = produto.split("R$")[1];
    let quantidade = document.getElementById("quantidade").value;

    if (quantidade == 0) {
        return;
    }

    //calcular o preço, o nosso subtotal
    let preco = quantidade * valorUnitario;

    //adicionar no carrinho
    let carrinho = document.getElementById("lista-produtos");
    carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
          <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${preco}</span>
        </section>`;

    //atualizar o valor total
    total = total + preco;
    campoTotal = document.getElementById("valor-total");
    campoTotal.textContent = `R$ ${total}`;
    document.getElementById("quantidade").value = '';
}

function limpar() {
    let total = 0;
    document.getElementById("quantidade").value = '';
    document.getElementById("lista-produtos").innerHTML = "";
    document.getElementById("valor-total").textContent = `R$ ${total}`;
}