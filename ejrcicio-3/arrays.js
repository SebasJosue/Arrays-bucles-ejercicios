/* 1. **Ejercicio 03**
    
    El mismo ***Ejercicio 01***  pero considerar que las combinaciones no se repitan, es decir, las salida seria:
    
    02 04 08
    
    24 28
    
    48 */


    'use strict';

    let numbers = [2, 4, 8, 24, 28, 48];

    function generateCombinations(numbers) {
      
      for (let i = 0; i < numbers.length; i++) {
          for (let j = i + 1; j < numbers.length; j++) {
              alert(`${numbers[i]} ${numbers[j]}`);
          }
      }
  
  
  }
  
  generateCombinations(numbers);
  