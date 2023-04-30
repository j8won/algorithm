const input = require("fs").readFileSync("example.txt").toString().trim();

let stars = "";
for (let i = 0; i < input; i++) {
  stars += "*";
  console.log(stars + "\n");
}
