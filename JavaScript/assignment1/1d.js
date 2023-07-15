const readline = require('readline');

const rl = readline.createInterface(
    {
  input: process.stdin,
  output: process.stdout
}
);

rl.question('Enter a number: ', function(number) {
  number = parseInt(number);

  if (isNaN(number)) {
    console.log('Invalid number entered.');
  } else {
    if (number % 2 === 0) {
      console.log(number + ' even number.');
    } else {
      console.log(number + '  odd number.');
    }
  }

  rl.close();
}
);