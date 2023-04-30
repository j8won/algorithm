const input = require("fs")
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split("\n");

const numTestCase = Number(input.shift());
let M, N, K;
const directions = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1],
];

const bfs = (x, y) => {
  const queue = [[x, y]];

  while (queue.length) {
    const [a, b] = queue.shift();

    if (!map[a][b]) {
      continue;
    } else {
      map[a][b] = 0;
    }

    for (let i = 0; i < directions.length; i++) {
      let newA = a + directions[i][0];
      let newB = b + directions[i][1];

      if (newA < 0 || newB < 0 || newA >= M || newB >= N) {
        continue;
      }
      if (map[newA][newB]) {
        queue.push([newA, newB]);
      }
    }
  }
};

for (let i = 0; i < numTestCase; i++) {
  let worm = 0;
  [M, N, K] = input.shift().split(" ").map(Number);

  var map = Array.from(Array(M), () => new Array(N).fill(0));

  for (let j = 0; j < K; j++) {
    let [x, y] = input.shift().split(" ").map(Number);
    map[x][y] = 1;
  }

  for (let k = 0; k < M; k++) {
    for (let l = 0; l < N; l++) {
      if (map[k][l]) {
        bfs(k, l);
        worm++;
      }
    }
  }

  console.log(worm);
}
