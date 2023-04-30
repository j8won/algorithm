let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let [hour, minute] = input[0].split(" ").map(e => Number(e));
let time = Number(input[1]);

let totalMinute = hour * 60 + minute + time;
totalMinute %= 1440;

let endHour = parseInt(totalMinute / 60);
let endMinute = totalMinute % 60;

console.log(endHour + " " + endMinute);

