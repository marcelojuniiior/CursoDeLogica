const formProb = document.getElementById("formProb");
let senha = document.getElementById("senha");

let resultado = document.getElementById("resultado");


let textResult = document.getElementById("textResult");
const senha_fixa = 2002;

let numeroTentativa = 0;
const maxTentativa = 2;


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

formProb.addEventListener('submit', async function (event) {
    event.preventDefault();


    senhaValue = parseFloat(senha.value);

    if (numeroTentativa < maxTentativa) {

        console.log("passou")
        if (senhaValue === senha_fixa) {
            resultado.style.display = "flex";
            resultado.style.flexDirection = "column";
            textResult.innerHTML = "<h2>Acesso Permitido<h2>";
        } else {
            resultado.style.display = "flex";
            resultado.style.flexDirection = "column";
            numeroTentativa += 1;
            console.log(numeroTentativa)
            textResult.innerHTML = `<h2>Acesso Negado</h2> <h2>Você tem:${maxTentativa - numeroTentativa} Tentativas restantes</h2>`;

        }
    } else {
        textResult.innerHTML = `<h2>Acesso Bloqueado</h2> <h2>Você tem:${maxTentativa - numeroTentativa} Tentativas restantes, contate o adminstrador</h2>`;
    }
    console.log(numeroTentativa)
});

function calcularNovamente() {
    resultado.style.display = "none";

    formProb.style.display = "block";
    console.log("chegou calcular novamente")
    getN1.value = 0;
    getN2.value = 0;

}



