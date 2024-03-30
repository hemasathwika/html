// create  an array of numbers by taking input from the user till user enters 0 and then display the arra

const prompt = require('prompt-sync')();

let numbers = [];
let input = parseInt(prompt("Enter a number (enter 0 to stop): "));

while (input !== 0) {
  numbers.push(input);
  input = parseInt(prompt("Enter a number (enter 0 to stop): "));
}

console.log(numbers);