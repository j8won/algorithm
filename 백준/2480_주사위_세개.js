let input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');

let [a, b, c] = input.map(e => Number(e));

if (a === b && b === c) {
  console.log(10000 + a * 1000);
} else if ((a === b) || (a === c)) {
  console.log(1000 + a * 100);
} else if (b === c) {
  console.log(1000 + b * 100);
} else {
  console.log(100 * Math.max(a, b, c));
}
