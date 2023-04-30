const input = require("fs")
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split("\n");

const [M, N, K] = input.shift().split(" ");
const graph = Array.from({ length: M }).map(
  (row) => (row = Array.from({ length: N }).fill(0))
);

const boxes = [];

for (let i = 0; i < K; i++) {
  boxes.push(input.shift().split(" "));
}

boxes.forEach((box) => createBoxInGraph(box));

function createBoxInGraph(box) {
  let [startX, startY] = [box[1], box[0]];
  let [endX, endY] = [box[3] - 1, box[2] - 1];

  for (let i = startX; i <= endX; i++) {
    for (let j = startY; j <= endY; j++) {
      graph[i][j] = 1;
    }
  }
}

const visited = {};

let tmp = [];
for (let i = 0; i < M; i++) {
  for (let j = 0; j < N; j++) {
    if (graph[i][j] === 0 && !visited[[i, j]]) tmp.push(bfs(i, j).length);
  }
}

function bfs(x, y) {
  const result = [];
  const queue = [[x, y]];
  const visitedXY = {};
  visitedXY[[x, y]] = true;
  visited[[x, y]] = true;

  const dx = [0, 0, -1, 1];
  const dy = [-1, 1, 0, 0];
  let cnt = 1;

  while (queue.length) {
    for (let i = 0; i < queue.length; i++) {
      let coord = queue.shift();
      result.push(coord);

      for (let j = 0; j < 4; j++) {
        let nx = coord[0] + dx[j];
        let ny = coord[1] + dy[j];

        if (
          nx >= 0 &&
          ny >= 0 &&
          nx < graph.length &&
          ny < graph[0].length &&
          graph[nx][ny] === 0 &&
          !visitedXY[[nx, ny]]
        ) {
          visitedXY[[nx, ny]] = true;
          visited[[nx, ny]] = true;

          cnt++;
          queue.push([nx, ny]);
        }
      }
    }
  }

  return result;
}

tmp.sort((a, b) => a - b);
let answer = tmp.length + "\n" + tmp.join(" ");
console.log(answer);
