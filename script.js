function soma() {
    const number = parseFloat(document.getElementById("number").value);
    const number2 = parseFloat(document.getElementById("number2").value);
    const resultado = number + number2;
    document.getElementById("resultado").innerText = resultado;
}

function multiplicar() {
    const number = parseFloat(document.getElementById("number").value);
    const number2 = parseFloat(document.getElementById("number2").value);
    const resultado = number * number2;
    document.getElementById("resultado").innerText = resultado;
}

function dividir() {
    const number = parseFloat(document.getElementById("number").value);
    const number2 = parseFloat(document.getElementById("number2").value);
    const resultado = number / number2;
    document.getElementById("resultado").innerText = resultado;
}

function subtrair() {
    const number = parseFloat(document.getElementById("number").value);
    const number2 = parseFloat(document.getElementById("number2").value);
    const resultado = number - number2;
    document.getElementById("resultado").innerText = resultado;
}

function operar() {
    const select = document.querySelector('select');
    const operar = select.value;
    console.log(operar);
    

    if (operar == 1) {
        soma();
    } else if (operar == 2) {
        subtrair();
    } else if (operar == 3) {
        multiplicar();
    } else {
        dividir();
    }
}