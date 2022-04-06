/*
Count Up and Down Solution - Using a Loop.
    1- Write a function that receive a value.
    2- Create a increment loop and log the index value.
    2- Create a decrement loop and log the index value.
*/

function countUpAndDown(value) {
  for (let i = 0; i <= value; i++) {
    console.log(`Going Up: ${i}`);
  }
  console.log("We reach the top!!!");
  for (let n = value; n >= 0; n--) {
    console.log(`Going Down: ${n}`);
  }
}

countUpAndDown(10);
// Big O = O(n)
