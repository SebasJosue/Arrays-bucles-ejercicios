/* 1. **Ejercicio 03**
    
    El mismo ***Ejercicio 01***  pero considerar que las combinaciones no se repitan, es decir, las salida seria:
    
    02 04 08
    
    24 28
    
    48 */


    'use strict';

let nums = [0, 2, 4, 8];

function imprimirTabla(nums) {
  let tabla = "";
  for (let i = 0; i < 4; i++) {
    let fila = "";
    for (let j = i + 1; j < 4; j++) { // Comenzamos j desde i + 1 para evitar repeticiones
      let numero = i * 2 * 10 + nums[j];
      fila += `${numero < 10 ? '0' + numero : numero} `;
    }
    if (fila !== "") { // Solo agregamos la fila si no está vacía
      tabla += fila + "\n";
    }
  }
  return tabla;
}

let tablaNumeros = imprimirTabla(nums);
alert(tablaNumeros);