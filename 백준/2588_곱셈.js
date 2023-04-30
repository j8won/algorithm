let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

let [A, B] = input.map((e) => Number(e));

console.log(A * Number(String(B)[2]));
console.log(A * Number(String(B)[1]));
console.log(A * Number(String(B)[0]));
console.log(A * B);
