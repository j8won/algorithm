let fs = require("fs");

let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [A, B] = input[0].split(" ").map((e) => +e);

console.log(A + B);
console.log(A - B);
console.log(A * B);
console.log(pareInt(A / B));
console.log(A % B);
