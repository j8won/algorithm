const input = require("fs")
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split("\n");

const cptNum = +input.shift();
const edgeNum = +input.shift();
let graph = [...Array(cptNum + 1)].map((e) => []);

for (let i = 0; i < edgeNum; i++) {
  let [from, to] = input[i].split(" ").map((e) => +e);
  graph[from].push(to);
  graph[to].push(from);
}

const bfs = (graph, startNode) => {
  const visited = [];
  const needVisit = [];

  needVisit.push(startNode);

  while (needVisit.length !== 0) {
    const node = needVisit.shift();

    if (!visited.includes(node)) {
      visited.push(node);
      needVisit.push(...graph[node]);
    }
  }

  return visited;
};

console.log(bfs(graph, 1).length - 1);
