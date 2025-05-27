function comprar() {
    let ingresso = document.getElementById("tipo-ingresso").value;
    let quantidade = parseInt(document.getElementById("qtd").value);

    if (isNaN(quantidade)) {
        alert("Por gentileza, coloque a quantidade de ingressos");
        return;
    }

    if (ingresso === "pista") {
        let pista = parseInt(document.getElementById("qtd-pista").innerHTML);
        if (pista < 0 || quantidade > pista) {
            alert("Quantidade indisponível para pista");
        } else {
            alert("Compra realizada com sucesso!");
            document.getElementById("qtd-pista").textContent = pista - quantidade;
        }
    } else if (ingresso === "superior") {
        let superior = parseInt(document.getElementById("qtd-superior").innerHTML);
        if (superior < 0 || quantidade > superior) {
            alert("Quantidade indisponível para superior");
        } else {
            alert("Compra realizada com sucesso!");
            document.getElementById("qtd-superior").textContent = superior - quantidade;
        }
    } else if (ingresso === "inferior") {
        let inferior = parseInt(document.getElementById("qtd-inferior").innerHTML);
        if (inferior < 0 || quantidade > inferior) {
            alert("Quantidade indisponível para inferior");
        } else {
            alert("Compra realizada com sucesso!");
            document.getElementById("qtd-inferior").textContent = inferior - quantidade;
        }
    } else {
        alert("tipo de ingresso inválido");
    }
    
} 