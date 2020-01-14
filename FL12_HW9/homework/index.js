function convert(...args) {
  for (let i = 0; i < args.length; i++) {
    args[i] = typeof args[i] === 'string' ? +args[i] : '' + args[i];
  }
  return args;
}

function executeforEach(arr, callback) {
  for (let el of arr) {
    callback(el);
  }
}

function mapArray(arr, callback) {
  let result = [];
  executeforEach(arr, el => result.push(callback(+el)));
  return result;
}

function filterArray(arr, callback) {
  let result = [];
  executeforEach(arr, el => {
    if (callback(el)) {
      result.push(el)
    }
  });
  return result;
}

function flipOver(str) {
  let result = '';
  executeforEach(str, el => {
    result = el + result
  });
  return result;
}

function makeListFromRange(borders) {
  let result = [];
  for (let i = borders[0]; i <= borders[1]; i++) {
    result.push(i);
  }
  return result;
}

function getArrayOfKeys(arr, key) {
  let result = [];
  executeforEach(arr, el => result.push(el[key]));
  return result;
}

function substitute(arr) {
  const BELOW_NUM = 30;
  return mapArray(arr, el => el < BELOW_NUM ? '*' : el);
}

function getPastDay(date, lostDays) {
  let copyDate = new Date(date);
  copyDate.setDate(date.getDate() - lostDays);
  return copyDate.getDate();
}

function formatDate(date) {
  const TEN = 10;
  const YEAR = date.getFullYear();
  const MONTH = date.getMonth() + 1;
  const DAY = date.getDate();
  const HOUR = date.getHours() < TEN ? '0' + date.getHours() : date.getHours();
  const MINUTES = date.getMinutes() < TEN ? '0' + date.getMinutes() : date.getMinutes();
  return `${YEAR}/${MONTH}/${DAY} ${HOUR}:${MINUTES}`
}
