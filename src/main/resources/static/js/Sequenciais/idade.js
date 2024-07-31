const formIdade = document.getElementById("formIdade");

const idade1 = document.getElementById("idade1");
const idade2 = document.getElementById("idade2");

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

formIdade.addEventListener('submit', function (event) {
    event.preventDefault();

    const dados = {
        idade1: parseFloat(idade1.value),
        idade2: parseFloat(idade2.value),
    }

    let calculado = calcular(dados);

    rHidden.style.display = 'flex';
    rHidden.style.flexDirection = 'column';

    formIdade.style.display = 'none';
    const pessoa1 = document.getElementById("pessoa1");
    const pessoa2 = document.getElementById("pessoa2");
    const mIdade = document.getElementById("mIdade");
    const textResult = document.getElementById("textResult");

    mIdade.innerHTML = "A media de idade entre:" + " " + pessoa1.value + " " + "e" + " " + pessoa2.value + " " + "é de: ";
    textResult.innerHTML = " " + calculado.mIdade.toFixed(1) + " " + "Anos.";

});

function calcularNovamente() {
    formIdade.style.display = "block";
    rHidden.style.display = "none";

}

function resultado() {

}

function calcular(dados) {
    let mIdade = (dados.idade1 + dados.idade2) / 2;
    return { mIdade };

}

