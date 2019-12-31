function getMin(...args) {
  let min = args[0];
  for (let i = 0; i < args.length; i++) {
    min = args[i] < min ? args[i] : min;
  }
  return min;
}

getMin(5, 8, 11, -2, 0, -1, 25, -10);
