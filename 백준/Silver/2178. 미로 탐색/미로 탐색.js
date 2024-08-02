const fs = require("fs");
const filePath = !process.env.CODESANDBOX_HOST ? "/dev/stdin" : "data.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [lens, ...arr] = input;

const [N, M] = lens.split(" ").map(Number);

const inputs = arr.map((v) => v.split("").map(Number));
const vis = Array.from({ length: N }, (v) => [...Array(M).fill(0)]);
const news = [
  [0, 1],
  [0, -1],
  [1, 0],
  [-1, 0],
];

function BFS(x, y) {
  const queue = [];
  queue.push([x, y]);
  vis[x][y] = 1;
  while (queue.length !== 0) {
    const [mx, my] = queue.shift();
    for (let i = 0; i < 4; i++) {
      const dx = mx + news[i][0];
      const dy = my + news[i][1];
      if (dx < 0 || dy < 0 || dx >= N || dy >= M) continue;
      if (vis[dx][dy] !== 0 || inputs[dx][dy] === 0) continue;
      vis[dx][dy] = vis[mx][my] + 1;
      queue.push([dx, dy]);
    }
  }
}

BFS(0, 0);

console.log(vis[N - 1][M - 1]);
