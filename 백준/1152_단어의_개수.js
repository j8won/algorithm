const input = require("fs")
  .readFileSync("예제.txt")
  .toString()
  .trim()
  .split(" ");
let result = input.length;

for (let i = 0; i < input.length; i++) {
  if (input[i] == "") {
    result -= 1;
  }
}

console.log(result);
