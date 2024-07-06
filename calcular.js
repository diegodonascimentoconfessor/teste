let operacao = "";
let valor1 = "";
let valor2 = "";

function adicionarNumero(numero) {
    document.getElementById("input").value += numero;
}

function definirOperacao(op) {
    if (operacao === "") {
        valor1 = document.getElementById("input").value;
        operacao = op;
        document.getElementById("input").value += " " + operacao + " ";
    } else {
        calcularResultado();
        valor1 = document.getElementById("input").value;
        operacao = op;
        document.getElementById("input").value += " " + operacao + " ";
    }
}

function calcularResultado() {
    let displayValue = document.getElementById("input").value;
    let partes = displayValue.split(" ");
    valor1 = partes[0];
    operacao = partes[1];
    valor2 = partes[2];
    let resultado;
    switch (operacao) {
        case '+':
            resultado = parseFloat(valor1) + parseFloat(valor2);
            break;
        case '-':
            resultado = parseFloat(valor1) - parseFloat(valor2);
            break;
        case '*':
            resultado = parseFloat(valor1) * parseFloat(valor2);
            break;
        case '/':
            resultado = parseFloat(valor1) / parseFloat(valor2);
            break;
        default:
            resultado = "Erro";
    }
    document.getElementById("input").value = resultado;
    operacao = "";
    valor1 = "";
    valor2 = "";
}

function limparDisplay() {
    document.getElementById("input").value = "";
    valor1 = "";
    valor2 = "";
    operacao = "";
}
