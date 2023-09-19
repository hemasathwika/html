//Accept a number and check whether it is prime or not

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function checkPrime(number) {
  if (number <= 1) {
    return false;
  } else {
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        return false;
      }
    }
  }
  return true;
}

rl.question('Enter a number: ', (userInput) => {
  let number = parseInt(userInput);

  if (checkPrime(number)) {
    console.log(number + ' is a prime number!');
  } else {
    console.log(number + ' is not a prime number.');
  }

  rl.close();
});
