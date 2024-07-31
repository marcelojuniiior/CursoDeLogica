const formProb = document.getElementById("formProb");
let getN1 = document.getElementById("n1");
let getN2 = document.getElementById("n2");

let resultado = document.getElementById("resultado");

let rCalculo = document.getElementById("rCalculo");
let textResult = document.getElementById("textResult");

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



    let n1 = parseFloat(getN1.value);
    let n2 = parseFloat(getN2.value);

    console.log(n1, n2)
    while (n1 != n2) {
        if (n1 < n2) {
            resultado.style.display = "flex";
            resultado.style.flexDirection = "column";
            rCalculo.innerHTML = "";
            textResult.innerHTML = `
        <label style="display:flex; justify-content:center;">A ordem é crescente</label>
        <button class="btn btn-light form-control" style="justify-content:center; "onclick="calcularNovamente()">Calcular novamente</button>
        `;
            formProb.style.display = "none";
            break

        } else if (n1 > n2) {
            resultado.style.display = "flex";
            resultado.style.flexDirection = "column";
            rCalculo.innerHTML = "";
            textResult.innerHTML = `
        <label style="display:flex; justify-content:center;">A ordem é Decrescente</label>
        <button class="btn btn-light form-control" style="justify-content:center; "onclick="calcularNovamente()">Calcular novamente</button>
        `;
            formProb.style.display = "none";
            break
        }
    }
    if (n1 === n2) {
        resultado.style.display = "flex";
        resultado.style.flexDirection = "column";
        rCalculo.innerHTML = "";
        textResult.innerHTML = `
            <label style="display:flex; justify-content:center;">Os numeros são Iguais</label>
            <button class="btn btn-light form-control" style="justify-content:center; "onclick="calcularNovamente()">Calcular novamente</button>
            `;
        formProb.style.display = "none";
    }


});

function calcularNovamente() {
    resultado.style.display = "none";

    formProb.style.display = "block";
    console.log("chegou calcular novamente")
    getN1.value = 0;
    getN2.value = 0;

}



