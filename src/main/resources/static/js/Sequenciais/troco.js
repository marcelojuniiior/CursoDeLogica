const formTroco = document.getElementById("formTroco");

const precoUnid = document.getElementById("precoUnid");
const qtdProduto = document.getElementById("qtdProduto");
const dinRecebido = document.getElementById("dinRecebido");

const rHidden = document.getElementById("resultado");

function verMais() {
    let texto = document.getElementById("texto");
    let icon = document.getElementById("iconButton")

    if (texto.style.display === 'none') {
        texto.style.display = 'inline';
        icon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"/>
</svg>`
        console.log("teste1");

    } else {
        texto.style.display = 'none';
        icon.innerHTML = `<svg id="iconButton" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                    class="bi bi-chevron-right" viewBox="0 0 16 16">
                    <path fill-rule="evenodd"
                        d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708" />
                </svg>`
        console.log("teste");
    }
}

formTroco.addEventListener('submit', function (event) {
    event.preventDefault();

    const dados = {
        precoUnid: parseFloat(precoUnid.value),
        qtdProduto: parseInt(qtdProduto.value),
        dinRecebido: parseFloat(dinRecebido.value),

    }

    let calculado = calcular(dados);

    rHidden.style.display = 'flex';
    rHidden.style.flexDirection = 'column';

    formTroco.style.display = 'none';
    const textResult = document.getElementById("textResult");
    const rSoma = document.getElementById("rSoma");

    textResult.innerHTML = "O troco será de R$:"
    rSoma.innerHTML = calculado.troco.toFixed(2);

});

function calcularNovamente() {
    formTroco.style.display = "block";
    rHidden.style.display = "none";

}

function calcular(dados) {
    let valorTotal = dados.precoUnid * dados.qtdProduto;
    let dinRecebido = dados.dinRecebido;
    let troco = dinRecebido - valorTotal;

    return { troco };

}
