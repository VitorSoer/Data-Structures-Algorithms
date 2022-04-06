/*
Check if is a pair Solution - Using a ternary operator.
    1- Write a function that receive a value.
    2- Use a conditional(ternary) operator to check if is
    a pair number and log the result.
*/

function checkIfIsAPair(value) {
  return value % 2 == 0
    ? console.log("Is a pair!")
    : console.log("Is not a pair!");
}

checkIfIsAPair(5); // Is not a pair!
// Big O = O(1)
