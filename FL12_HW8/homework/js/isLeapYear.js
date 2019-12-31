function isLeapYear(date) {
  let year = new Date(date).getFullYear();
  if (isNaN(year)) {
    return 'Invalid Date';
  } else {
    let isLeapDate = new Date(year, 1, 29).getDate() === 29;
    return isLeapDate ? `${year} is a leap year` : `${year} is not a leap year`;
  }
}

isLeapYear(1213131313);
