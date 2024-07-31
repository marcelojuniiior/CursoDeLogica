const formMaior_de_tres = document.getElementById("formMaior_de_tres");

const primeiroValor = document.getElementById("primeiroValor");
const segundoValor = document.getElementById("segundoValor");
const terceiroValor = document.getElementById("terceiroValor");

const resultado = document.getElementById("resultado");

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

formMaior_de_tres.addEventListener('submit', function (event) {
    event.preventDefault();

    const dados = {
        primeiroValor: parseFloat(primeiroValor.value),
        segundoValor: parseFloat(segundoValor.value),
        terceiroValor: parseFloat(terceiroValor.value),
    }

    formMaior_de_tres.style.display = 'none';

    resultado.style.display = 'flex';
    resultado.style.flexDirection = 'column';

    const textResult = document.getElementById("textResult");

    if (dados.primeiroValor <= dados.segundoValor) {
        if (dados.primeiroValor <= dados.terceiroValor) {
            textResult.innerHTML = "Menor numero:" + " " + dados.primeiroValor;
            return
        } else {
            textResult.innerHTML = "Menor numero:" + " " + dados.segundoValor;
            return
        }
    } else if (dados.terceiroValor <= dados.segundoValor) {
        textResult.innerHTML = "Menor numero:" + " " + dados.terceiroValor;
        return
    } else {
        textResult.innerHTML = "Menor numero:" + " " + dados.segundoValor;
    }
});

function calcularNovamente() {
    formMaior_de_tres.style.display = "block";
    resultado.style.display = "none";

}



function calcular(dados) {
    let resultado = (dados.primeiroValor + dados.terceiroValor) / 2;
    return { resultado };

}

