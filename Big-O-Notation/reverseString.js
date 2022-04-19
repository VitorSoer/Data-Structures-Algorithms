/*
Reverse String Solution - Using chaining Method and Arrow function.
    1- Split method creates a new array with the value.
    2- Reverse method reverse the new array.
    3- Join method join all the elements.
*/

const reverseString = (value) => value.split("").reverse().join("");

console.log(reverseString("Vitor Soer")); // reoS rotiV
// Big O = O(1)
