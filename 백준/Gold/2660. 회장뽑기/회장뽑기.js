const QNUM = {
  number: 2660,
  title: `회장뽑기 `,
  level: `g5`,
};

/**
 * @method graph
 * @note
 */

const fs = require("fs");

// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'data.txt';
const filePath = !process.env.CODESANDBOX_HOST ? "/dev/stdin" : "data.txt";

let [N, ...inputs] = fs.readFileSync(filePath).toString().trim().split(`\n`);

N = +N;

inputs.pop();

const edge = inputs.map((v) => v.split(" ").map(Number));

const graph = [...Array(N)].map((v) => [...Array()]);

edge.forEach((v) => {
  const [f, e] = v;
  graph[f - 1].push(e - 1);
  graph[e - 1].push(f - 1);
});

function BFS(st) {
  const queue = [];
  const dist = [...Array(N).fill(-1)];
  dist[st] = 0;
  queue.push(st);
  while (1) {
    if (queue.length === 0) break;
    const cur = queue.shift();
    graph[cur].forEach((v) => {
      if (dist[v] === -1) {
        dist[v] = dist[cur] + 1;
        queue.push(v);
      }
    });
  }
  const val = Math.max(...dist);
  if (val === 0) return 100;
  return val;
}

const score = [];
for (let i = 0; i < N; i++) {
  score[i] = BFS(i);
}
const minscore = Math.min(...score);

const cand = [];

for (let i = 0; i < N; i++) {
  if (score[i] === minscore) cand.push(i + 1);
}

const answer = `${minscore} ${cand.length}`;

console.log(answer);
console.log(cand.join(" "));
