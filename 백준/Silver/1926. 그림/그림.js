//1926.그림.s1
/**
 * @입력값 NM <= 2500000
 * @시간 2
 * @시간복잡도 O(NlogN || N || logN || 1)
 * @method BFS
 * @note
 */

const fs = require("fs");
const filePath = !process.env.CODESANDBOX_HOST ? "/dev/stdin" : "data.txt";

let [iNum, ...iVal] = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, M] = iNum.split(" ").map(Number);

const paper = iVal.map((v) => v.split(" ").map(Number));
const vis = Array.from({ length: N }, () => Array(M).fill(0));

const answer = {
  count: 0,
  area: 0,
};

const news = [
  [-1, 0],
  [0, 1],
  [1, 0],
  [0, -1],
];

for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (paper[i][j] === 0) continue;
    if (vis[i][j] === 1) continue;
    // paper가 1이고 방문한 적이 없다면, BFS
    const pArea = BFS(i, j);
    answer.count += 1;
    answer.area = Math.max(answer.area, pArea);
  }
}

function BFS(px, py) {
  let area = 1;
  const queue = [];
  queue.push([px, py]);
  vis[px][py] = 1;
  while (queue.length !== 0) {
    const [dx, dy] = queue.shift();
    for (let i = 0; i < 4; i++) {
      const mx = dx + news[i][0];
      const my = dy + news[i][1];

      if (mx < 0 || mx >= N || my < 0 || my >= M) continue;
      if (paper[mx][my] !== 1 || vis[mx][my]) continue;
      queue.push([mx, my]);
      vis[mx][my] = 1;
      area += 1;
    }
  }
  return area;
}

console.log(`${answer.count}\n${answer.area}`);
