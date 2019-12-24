let promptValue = prompt('Please, enter side "a" for triangle.');
const a = +promptValue === parseFloat(promptValue) ? +promptValue : undefined;

promptValue = prompt('Please, enter side "b" for triangle.');
const b = +promptValue === parseFloat(promptValue) ? +promptValue : undefined;

promptValue = prompt('Please, enter side "c" for triangle.');
const c = +promptValue === parseFloat(promptValue) ? +promptValue : undefined;


if (a === undefined || b === undefined || c === undefined) {
  alert('Input values should be ONLY numbers.');
} else if (a <= 0 || b <= 0 || c <= 0 ) {
    alert('A triangle must have 3 sides with a positive definite length.');
} else if (a + b <= c || a + c <= b || b + c <= a) {
    alert('Triangle doesn’t exist.')
} else {
    let typeTriangle = a === b && b === c && 'Equilateral triangle' ||
                      (a === b || a === c || b === c) && 'Isosceles triangle' ||
                      'Scalene triangle';
    console.log(typeTriangle);
}
