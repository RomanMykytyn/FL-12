let promptValue = prompt('Please, enter "a" coefficient.');
const a = +promptValue === parseFloat(promptValue) ? +promptValue : undefined;

promptValue = prompt('Please, enter "b" coefficient.');
const b = +promptValue === parseFloat(promptValue) ? +promptValue : undefined;

promptValue = prompt('Please, enter "c" coefficient.');
const c = +promptValue === parseFloat(promptValue) ? +promptValue : undefined;

const two = 2;
const four = 4;

if (a === 0 || a === undefined || b === undefined || c === undefined) {
  console.log('Invalid input data');
} else if (a !== 0 && b !== 0 && c !== 0) {
    let discriminant = b * b - four * a * c;
    if (discriminant > 0) {
      let x1 = (-b + Math.sqrt(discriminant)) / (two * a);
      let x2 = (-b - Math.sqrt(discriminant)) / (two * a);
      console.log('x1 = ' + x1, 'x2 = ' + x2);
    } else if (discriminant === 0) {
        let x = -b / (two * a);
        console.log('x1 = ' + x, 'x2 = ' + x);
    } else {
        console.log('No solution');
    }
} else if (a !== 0 && b === 0 && c === 0) {
    console.log('x = 0');
} else if (a !== 0 && b !== 0 && c === 0) {
    console.log('x1 = 0', 'x2 = ' + -b/a);
} else if (a !== 0 && b === 0 && c !== 0) {
    if (-c / a < 0) {
      console.log('No solution');
    } else {
        let x = Math.sqrt(-c / a)
        console.log('x1 = ' + x, 'x2 = -' + x);
    }
}
