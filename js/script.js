
let numero1 = '';
let numero2 = '';
let operacion = '';

function agregarNumero(num) {
  if (operacion === '') {
    numero1 += num;
    document.getElementById('resultado').value = numero1;
  } else {
    numero2 += num;
    document.getElementById('resultado').value = numero2;
  }
}

function operar(op) {
  operacion = op;
}

function calcularRaiz() {
    let resultado = 0;
    let numero1 = document.getElementById("resultado").value;
    resultado = Math.sqrt(numero1);
    document.getElementById('resultado').value = resultado;
    numero1 = resultado.toString();
    operacion = '';
}
  
function calcular() {
  let resultado = 0;
  switch(operacion) {
    case '+':
      resultado = parseFloat(numero1) + parseFloat(numero2);
      break;
    case '-':
      resultado = parseFloat(numero1) - parseFloat(numero2);
      break;
    case '*':
      resultado = parseFloat(numero1) * parseFloat(numero2);
      break;
    case '/':
      resultado = parseFloat(numero1) / parseFloat(numero2);
      break;
    case '%':
        resultado = parseFloat(numero1);
        break;
    case '√':
        resultado = parseFloat(Math.sqrt(numero1));
  }
  document.getElementById('resultado').value = resultado;
  numero1 = resultado.toString();
  numero2 = '';
  operacion = '';
}

function borrar() {
    numero1 = '';
    numero2 = '';
    operacion = '';
    document.getElementById('resultado').value = '';
  
}