let input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');

let [hour, minute] = input.map(e => +e);

if (minute >= 45) {
  minute -= 45;
} else {
  hour -= 1;
  minute += 15;
  if (hour < 0) {hour = 23;}
}

console.log(hour + " " + minute);
