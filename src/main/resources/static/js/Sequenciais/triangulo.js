const formTriangulo = document.getElementById("formTriangulo");

const base = document.getElementById("base");
const altura = document.getElementById("altura");

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

formTriangulo.addEventListener('submit', function (event) {
    event.preventDefault();

    const dados = {
        base: parseFloat(base.value),
        altura: parseFloat(altura.value),
    }

    console.log(dados)

    let calculado = calcular(dados);

    rHidden.style.display = 'flex';
    rHidden.style.flexDirection = 'column';

    formTriangulo.style.display = 'none';
    const Aterreno = document.getElementById("Aterreno");
    const Pmetro = document.getElementById("Pmetro");

    Aterreno.innerHTML = "Area do terreno:" + " " + calculado.aTriangulo.toFixed(4);
    Pmetro.innerHTML = "Perimetro do terreno:" + " " + calculado.pTriangulo.toFixed(4);

});

function calcularNovamente() {
    formTriangulo.style.display = "block";
    rHidden.style.display = "none";

}

function resultado() {

}

function calcular(dados) {
    let aTriangulo = dados.base * dados.altura;
    let pTriangulo = (dados.base * 2) + (dados.altura * 2);

    console.log(aTriangulo);
    console.log(pTriangulo);

    return { aTriangulo, pTriangulo };

}

