function adicionarCaracter(caracter) {
    const valorDisplay = document.querySelector(".display").value

    document.querySelector(".display").value = valorDisplay + caracter
}

function limpaTela() {
    document.querySelector(".display").value = ""
}

function calcular() {
    const display = document.querySelector(".display");
    const valorDisplay = display.value;

    try {
        
        if (valorDisplay.includes('/0')) {
            display.value = "Erro";
            return; 
        }

        const resultado = eval(valorDisplay);
        display.value = resultado;
    } catch (error) {

        display.value = "Erro";
    }
}


function inverterNumero() {
    const valorDisplay = document.querySelector(".display").value

    document.querySelector(".display").value = valorDisplay * -1
}
