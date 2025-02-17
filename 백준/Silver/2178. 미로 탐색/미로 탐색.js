//2178.미로탐색.s1
/**
 * @입력값 NM <= 10000
 * @시간 1
 * @시간복잡도 O(NlogN || N || logN || 1)
 * @method BFS
 * @note 이동 거리 vis에 기록
 */

const fs = require("fs");
const filePath = !process.env.CODESANDBOX_HOST ? "/dev/stdin" : "data.txt";

let [iNum, ...iVal] = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, M] = iNum.split(" ").map(Number);

const board = iVal.map((v) => v.split("").map(Number));
const vis = Array.from({ length: N }, () => Array(M).fill(0));

function BFS(px, py) {
  const news = [
    [1, 0],
    [0, -1],
    [-1, 0],
    [0, 1],
  ];
  const queue = [];
  queue.push([px, py]);
  vis[px][py] = 1;

  while (queue.length !== 0) {
    const [dx, dy] = queue.shift();
    const vLen = vis[dx][dy];
    for (let i = 0; i < 4; i++) {
      const mx = news[i][0] + dx;
      const my = news[i][1] + dy;
      if (mx < 0 || mx >= N || my < 0 || my >= M) continue;
      if (board[mx][my] === 0 || vis[mx][my] > 0) continue;
      queue.push([mx, my]);
      vis[mx][my] = vLen + 1;
    }
  }
  return vis[N - 1][M - 1];
}

console.log(BFS(0, 0));
