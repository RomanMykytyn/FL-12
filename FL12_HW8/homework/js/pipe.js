function addOne(x) {
  return x + 1;
}

function pipe(num, ...func) {
  for (let instanceFunc of func) {
    num = instanceFunc(num)
  }
  return num;
}

pipe(1, addOne, addOne);
