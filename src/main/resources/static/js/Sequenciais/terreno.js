const formu = document.querySelector("form");
const largura = document.getElementById("largura");
const comprimento = document.getElementById("comprimento");
const vMetro = document.getElementById("vMetro");
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

formu.addEventListener('submit', function (event) {
    event.preventDefault();

    const dados = {
        largura: parseFloat(largura.value),
        comprimento: parseFloat(comprimento.value),
        vMetro: parseFloat(vMetro.value),
    }
    let resultadoProcessado = calcularTerreno(dados);




    rHidden.style.display = "flex";
    rHidden.style.flexDirection = "column";



    const aTerrenoClasse = document.getElementById("Aterreno");
    aTerrenoClasse.innerText = "Area do terreno:" + " " + resultadoProcessado.aTerreno.toFixed(2);

    const pMetroClasse = document.getElementById("Pmetro");
    pMetroClasse.innerText = "Preço por metro" + " " + "R$" + resultadoProcessado.Pterreno.toFixed(2);

    formu.style.display = "none";
});

function calcularNovamente() {
    formu.style.display = "block";
    rHidden.style.display = "none";

}

function resultado() {

}

function calcularTerreno(dados) {
    let aTerreno = dados.largura * dados.comprimento;
    let Pterreno = aTerreno * dados.vMetro;

    return { aTerreno, Pterreno };

}

