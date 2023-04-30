let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let caseNum = Number(input[0]);
let result = "";

for (let i = 1; i <= caseNum; i++) {
  let [a, b] = input[i].split(' ').map(e => Number(e));
  result += a + b + '\n'
}

console.log(result);
