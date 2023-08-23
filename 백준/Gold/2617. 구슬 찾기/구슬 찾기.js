const QNUM = {
  number: 2617,
  title: `구슬찾기`,
  level: `g4`,
};

/**
 * @method graph
 * @note 방향그래프 DFS
 */

const fs = require("fs");

// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'data.txt';
const filePath = !process.env.CODESANDBOX_HOST ? "/dev/stdin" : "data.txt";

let inputs = fs.readFileSync(filePath).toString().trim().split(`\n`);

const [N, M] = inputs[0].split(" ").map(Number);

const graph = [...Array(N + 1)].map((v) => [...Array()]);

for (let i = 1; i < inputs.length; i++) {
  const [f, e] = inputs[i].split(" ").map(Number);
  graph[f].push(e);
}

const lower = [...Array(N + 1).fill(0)];
const higher = [...Array(N + 1).fill(0)];
const isVisit = [];
for (let i = 1; i <= N; i++) {
  isVisit.length = 0;
  DFS(i, i);
}

function DFS(node, st) {
  isVisit[node] = true;
  lower[node] += 1;
  higher[st] += 1;
  for (let i = 0; i < graph[node].length; i++) {
    if (isVisit[graph[node][i]]) continue;
    DFS(graph[node][i], st);
  }
}

let answer = 0;

for (let i = 1; i <= N; i++) {
  if (lower[i] > (N + 1) / 2) answer++;
  if (higher[i] > (N + 1) / 2) answer++;
}

console.log(answer);
