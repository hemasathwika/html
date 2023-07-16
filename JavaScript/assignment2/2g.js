const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  let arr = [];
  let num;
  
  readline.question("Enter a number (enter 0 to stop): ", (input) => {
    num = parseInt(input)});
    while (num !== 0 && !isNaN(num)) {
      arr.push(num);
      readline.question("Enter a number (enter 0 to stop): ", (input) => {
        num = parseInt(input);
      });
    }
    readline.close();
    console.log(arr); 