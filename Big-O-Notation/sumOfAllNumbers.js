/*
Sum of All Numbers Solution - Using a Loop.
    1- Write a function that receive a value.
    2- Create a let to receive the result.
    3- Write a loop that make sum using the index value.
    4- Return the result.
*/

function sumOfAllNumbers(value) {
  let total = 0;
  for (let i = 1; i <= value; i++) {
    total += i;
  }
  return total;
}

console.log(sumOfAllNumbers(5)); // 15
// Big O = O(n)
