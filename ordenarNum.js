
//No cambiar el nombre de la función ordenarNumeros
const prompt = require("prompt-sync")()

function ordenarNumeros(num1, num2, num3) {

  let mayor
  let centro
  let menor
  if (num1 >= num2 && num1 >= num3) {
    mayor = num1;
    if (num2 >= num3) {
      centro = num2;
      menor = num3;
    } else {
      centro = num3;
      menor = num2;
    }
  } else if (num2 >= num1 && num2 >= num3) {
    mayor = num2;
    if (num1 >= num3) {
      centro = num1;
      menor = num3;
    } else {
      centro = num3;
      menor = num1;
    }
  } else {
    mayor = num3;
    if (num1 >= num2) {
      centro = num1;
      menor = num2;
    } else {
      centro = num2;
      menor = num1;
    }
  }

  if (num1 === num2 && num1 === num3) {
    console.log("Los números son iguales.");
  }
  else {
    console.log([mayor, centro, menor]);
    console.log([menor, centro, mayor]);

  }






  // No modificar el código debajo de esta línea
  return {
    mayor,
    centro,
    menor,
    ordenMayorAMenor: [mayor, centro, menor],
    ordenMenorAMayor: [menor, centro, mayor],
  };
}

module.exports = ordenarNumeros;

let num1 = parseFloat(prompt("Introduce el primer número:"));
let num2 = parseFloat(prompt("Introduce el segundo número:"));
let num3 = parseFloat(prompt("Introduce el tercer número:"));

ordenarNumeros(num1, num2, num3)
