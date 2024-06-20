/*
ejercicio 2
Concaternar los con cada elemento posterior al array

*/

'use strict';

let nums = [0,2,4,8];

function imprimirTabla(nums) {
  
  for (let i = 0; i < nums.length; i++) { // Iteramos hasta la penúltima fila
    
    for (let j = 0; j < nums.length; j++) {
    
      alert ( `${nums[i]} ${nums[j]} `);
    }
    
  }

  
}

imprimirTabla(nums);
