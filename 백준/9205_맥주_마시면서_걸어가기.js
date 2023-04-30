const input = require("fs")
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split("\n");

const caseNum = input.shift();

const countBeer = (start, end) => {
  let beerCnt = 20;
  let distance;

  distance += end[0] - start[0] >= 0 ? end[0] - start[0] : start[0] - end[0];
  distance += end[1] - start[1] >= 0 ? end[1] - start[1] : start[1] - end[1];

  if (beerCnt * 50 > distance) {
    return true;
  } else {
    return false;
  }
};

const isWalkable = (homeXY, martNum, martList, festivalXY) => {
  let start = homeXY;
  let end = [];
  let status = "";

  for (let i = 0; i < martNum; i++) {
    if (i === martNum) {
      end = festivalXY;
    } else {
      end = martList[i];
    }

    if (!countBeer(start, end)) {
      status = "sad";
      break;
    } else {
      status = "happy";
    }

    start = martList[i];
  }

  console.log(status);
};

for (let i = 0; i < caseNum; i++) {
  const martNum = input.shift();
  const home = input
    .shift()
    .split(" ")
    .map((e) => +e);
  let marts = [];

  for (let j = 0; j < martNum; j++) {
    marts.push(
      input
        .shift()
        .split(" ")
        .map((e) => +e)
    );
  }

  const festival = input
    .shift()
    .split(" ")
    .map((e) => +e);

  // console.log(martNum);
  // console.log(home);
  // console.log(marts);
  // console.log(festival);

  isWalkable(home, martNum, marts, festival);
}
