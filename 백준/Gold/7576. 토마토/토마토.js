//7576.토마토.g5
/**
 * @입력값 NM <= 1000000
 * @시간 1
 * @시간복잡도 O(NlogN || N || logN || 1)
 * @method BFS
 * @note 시작점이 2개인 BFS
 */

const fs = require("fs");
const filePath = !process.env.CODESANDBOX_HOST ? "/dev/stdin" : "data.txt";

let inputs = fs.readFileSync(filePath).toString().trim().split("\n");

const [iNums, ...iTomatos] = inputs.map((n) => n.split(" ").map(Number));
const [M, N] = iNums;
const vis = Array.from({ length: N }, () => Array(M).fill(0));

function BFS() {
  let answer = 0;
  let tomatoCounts = 0;
  const news = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];

  const queue = [];
  let queueIdx = 0;
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (iTomatos[i][j] === 0) continue;
      if (iTomatos[i][j] === 1) {
        queue.push([i, j]);
        vis[i][j] = 1;
        continue;
      }
      if (iTomatos[i][j] === -1) {
        vis[i][j] = -1;
        tomatoCounts += 1;
        continue;
      }
    }
  }
  if (queue.length === 0) return -1;

  while (queueIdx < queue.length) {
    const [sx, sy] = queue[queueIdx++];
    answer = vis[sx][sy];
    tomatoCounts += 1;
    for (let i = 0; i < 4; i++) {
      const nx = news[i][0] + sx;
      const ny = news[i][1] + sy;
      if (nx < 0 || ny < 0 || nx >= N || ny >= M) continue;
      if (vis[nx][ny] > 0 || vis[nx][ny] === -1) continue;
      queue.push([nx, ny]);
      vis[nx][ny] = vis[sx][sy] + 1;
    }
  }

  return tomatoCounts === M * N ? answer - 1 : -1;
}

console.log(BFS());
