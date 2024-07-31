const formBaskara = document.getElementById("formBaskara");

const a = document.getElementById("a");
const b = document.getElementById("b");
const c = document.getElementById("c");

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

formBaskara.addEventListener('submit', function (event) {
    event.preventDefault();

    const dados = {
        a: parseFloat(a.value),
        b: parseFloat(b.value),
        c: parseFloat(c.value),
    }

    let calculado = calcular(dados);

    formBaskara.style.display = "none";

    resultado.style.display = "flex";
    resultado.style.flexDirection = "column";



    if (calculado === "Não há raizes reais") {
        console.log("Não há raizes reais")
    } else if (calculado.length === 2) {
        const textResult = document.getElementById("textResult");
        const rCalculo = document.getElementById("rCalculo");


        textResult.innerHTML = "X1:" + " " + calculado[0];
        rCalculo.innerHTML = "X2:" + " " + calculado[1];

    }
    else {
        console.log("tem false")
    }

    /*
        formBaskara.style.display = 'none';
    
    
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
    
    */

});

function calcularNovamente() {
    formBaskara.style.display = "block";
    resultado.style.display = "none";

}



function calcular(dados) {
    let delta = (dados.b ** 2 - (4 * dados.a * dados.c));

    if (delta > 0) {
        let r1 = (- dados.b + Math.sqrt(delta)) / (2 * dados.a)
        let r2 = (- dados.b - Math.sqrt(delta)) / (2 * dados.a)

        return [r1, r2];

    } else if (delta < 0) {
        return "Não há raizes reais";
    } else {
        let r1 = (-dados.b) / (2 * dados.a);
        return [r1]
    };

}




