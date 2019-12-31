function makeNumber(str) {
  let result = '';
  for (let i = 0; i < str.length; i++) {
    result += isNaN(+str[i]) ? '' : str[i];
  }
  return result;
}

function countNumbers(str) {
  let numbers = makeNumber(str);
  let count = {};
  numbers.split('').forEach(
    digit => {
      count[digit] = !count[digit] ? 1 : count[digit] + 1
    }
  );
  return count;
}

countNumbers('erer384jj4444666888jfd123');
