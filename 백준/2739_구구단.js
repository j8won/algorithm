let input = require('fs').readFileSync('/dev/stdin').toString().trim();
let n = Number(input);
for (let i =1; i <= 9; i++) {
  console.log(`${n} * ${i} = ${n*i}`);
}
