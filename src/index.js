console.log("Hello, world!");

function acc(a, b) {
  return a + b;
}

function reduce(arr, fn, initial) {
  let acc = initial;
  for (let i = 0; i < arr.length; i++) {
    acc = fn(acc, arr[i]);
  }
  return acc;
}
