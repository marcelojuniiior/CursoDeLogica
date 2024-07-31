const formOperadora = document.getElementById("formOperadora");

const qtdMin = document.getElementById("qtdMin");

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

formOperadora.addEventListener('submit', function (event) {
    event.preventDefault();

    const dados = {
        qtdMin: parseFloat(qtdMin.value),
    }

    let calculado = calcular(dados);

    formOperadora.style.display = 'none';


    const rCalculo = document.getElementById("rCalculo");
    const textResult = document.getElementById("textResult");

    resultado.style.display = 'flex';
    resultado.style.flexDirection = 'column';

    rCalculo.innerHTML = "Valor a pagar R$:" + " " + calculado.valor;
});

function calcularNovamente() {
    formOperadora.style.display = "block";
    resultado.style.display = "none";

}



function calcular(dados) {
    if (dados.qtdMin > 100) {
        let qtdExedida = dados.qtdMin - 100;
        let valor = qtdExedida * 2 + 50;
        return { valor: valor };
    } else {
        let valor = 50;
        return { valor: valor }
    }

}

