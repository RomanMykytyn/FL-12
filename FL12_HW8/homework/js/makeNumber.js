function makeNumber(str) {
  let result = '';
  for (let i = 0; i < str.length; i++) {
    result += isNaN(+str[i]) ? '' : str[i];
  }
  return result;
}

makeNumber('iji12fj3gdj');
