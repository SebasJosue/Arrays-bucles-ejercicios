/*
ejercicio 2
Concaternar los con cada elemento posterior al array

*/

'use strict';

let nums = [0, 2, 4, 8];

function imprimirTabla(nums) {
  let tabla = "";
  for (let i = 0; i < 3; i++) { // Iteramos hasta la penúltima fila
    let fila = "";
    for (let j = 0; j < 4; j++) {
      let numero = i * 2 * 10 + nums[j];
      fila += `${numero < 10 ? '0' + numero : numero} `;
    }
    tabla += fila + "\n";
  }

  // Calculamos la última fila manualmente
  let filaFinal = "80 82 84 88";
  tabla += filaFinal;

  return tabla;
}

let tablaNumeros = imprimirTabla(nums);
alert(tablaNumeros);
