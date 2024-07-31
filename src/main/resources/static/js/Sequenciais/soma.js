const formSoma = document.getElementById("formSoma");

const soma1 = document.getElementById("soma1");
const soma2 = document.getElementById("soma2");

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

formSoma.addEventListener('submit', function (event) {
    event.preventDefault();

    const dados = {
        soma1: parseFloat(soma1.value),
        soma2: parseFloat(soma2.value),
    }

    console.log(dados)

    let calculado = calcular(dados);

    rHidden.style.display = 'flex';
    rHidden.style.flexDirection = 'column';

    formSoma.style.display = 'none';
    const textResult = document.getElementById("textResult");
    const rSoma = document.getElementById("rSoma");

    textResult.innerHTML = "O resultado da soma dos valores é:"
    rSoma.innerHTML = calculado.soma.toFixed(2);

});

function calcularNovamente() {
    formSoma.style.display = "block";
    rHidden.style.display = "none";

}

function resultado() {

}

function calcular(dados) {
    let soma = dados.soma1 + dados.soma2;

    return { soma };

}
