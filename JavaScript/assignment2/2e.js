let arr = [10, 15, 20, 25, 30, 35];

function filter1(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 5 === 0) {
      result.push(arr[i]);
    }
  }
  return result;
}

console.log(filter1(arr));