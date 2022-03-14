
var numb;
function calcular(valor) {
    document.getElementById('display').value += valor;
    numb = document.getElementById('display').value;
}

function limpar() {
    document.getElementById('display').value = '';
}

function resultado() {
    document.getElementById('display').value = eval(numb);
}