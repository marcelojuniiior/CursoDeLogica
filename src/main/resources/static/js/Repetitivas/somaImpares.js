const formProb = document.getElementById("formProb");

const x = document.getElementById("x");
const y = document.getElementById("y");

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

formProb.addEventListener('submit', function (event) {
    event.preventDefault();

    const dados = {
        x: parseFloat(x.value),
        y: parseFloat(y.value),
    }
    console.log(dados)

    let calculado = calcular(dados);

    rHidden.style.display = 'inline-block';


    formProb.style.display = 'none';
    const textResult = document.getElementById("textResult");
    const rCalculo = document.getElementById("rCalculo");

    textResult.innerHTML = "O resultado da soma dos impares é:"
    rCalculo.innerHTML = calculado;

});

function calcularNovamente() {
    formProb.style.display = "block";
    rHidden.style.display = "none";

}

function resultado() {

}

function calcular(dados) {
    if (dados.y < dados.x) {
        dados.x = dados.y;
        dados.y = dados.x;
    }

    let somaImpares = 0;
    for (i = dados.x; dados.x < dados.y; dados.x++) {
        if (dados.x % 2 === 1) {
            somaImpares += dados.x;
        }
    }
    console.log(somaImpares)
    return somaImpares;

}
