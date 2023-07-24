/*function greetWithDelay(name) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(`Hello, ${name}!`);
      }, 3000);
    });
  }*/
  greetWithDelay('Alice')
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.error(error);
  });