const formNotaFinal = document.getElementById("formNotaFinal");

const nota1 = document.getElementById("nota1");
const nota2 = document.getElementById("nota2");

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

formNotaFinal.addEventListener('submit', function (event) {
    event.preventDefault();

    const dados = {
        nota1: parseFloat(nota1.value),
        nota2: parseFloat(nota2.value),
    }

    let calculado = calcular(dados);

    formNotaFinal.style.display = 'none';


    const rCalculo = document.getElementById("rCalculo");
    const textResult = document.getElementById("textResult");

    resultado.style.display = 'flex';
    resultado.style.flexDirection = 'column';

    rCalculo.innerHTML = "NOTA FINAL:" + " " + calculado.resultado.toFixed(2);

    if (calculado.resultado >= 60) {
        textResult.innerHTML = "O aluno está APROVADO";

    } else {
        textResult.innerHTML = "O aluno está REPROVADO"
    }



});

function calcularNovamente() {
    formNotaFinal.style.display = "block";
    resultado.style.display = "none";

}



function calcular(dados) {
    let resultado = (dados.nota1 + dados.nota2) / 2;
    return { resultado };

}

