/*
Print all pair of a number Solution - Using a ternary operator.
    1- Write a function that receive a value.
    2- Create a loop for go through the number and log all the pair numbers.
*/

function printAllPairsOfANumber(value) {
    for (let i = 1; i <= value; i++) {
      if (i % 2 == 0) console.log(`I found the number ${i}`);
    }
  }
  
  printAllPairsOfANumber(10); // 2, 4, 6, 8, 10
  // Big O = O(n)
  