const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [A, B] = input[0].split(" ").map((e) => +e);

console.log(A * B);
