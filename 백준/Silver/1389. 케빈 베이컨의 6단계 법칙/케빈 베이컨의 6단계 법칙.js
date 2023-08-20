const QNUM = {
  number: 1389,
  title: `케빈베이컨의6단계법칙`,
  level: `s1`,
};

/**
 * @method graph
 * @note
 */

const fs = require("fs");

// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'data.txt';
const filePath = !process.env.CODESANDBOX_HOST ? "/dev/stdin" : "data.txt";

let [nums, ...inputs] = fs.readFileSync(filePath).toString().trim().split(`\n`);

const [N, M] = nums.split(" ").map(Number);
const graph = [...Array(N)].map((v) => [...Array()]);

inputs.forEach((v) => {
  const [f, e] = v.split(" ").map(Number);
  graph[f - 1].push(e - 1);
  graph[e - 1].push(f - 1);
});

function BFS(st) {
  let sum = 0;
  const queue = [];
  const isVisit = [...Array(N).fill(-1)];
  queue.push(st);
  isVisit[st] = 0;
  while (1) {
    if (queue.length === 0) break;
    const popVal = queue.shift();
    sum += isVisit[popVal];
    graph[popVal].forEach((v) => {
      if (isVisit[v] === -1) {
        queue.push(v);
        isVisit[v] = isVisit[popVal] + 1;
      }
    });
  }
  return sum;
}

const bacon = [];

for (let i = 0; i < N; i++) {
  bacon[i] = BFS(i);
}
const minBacon = Math.min(...bacon);
const answer = bacon.findIndex((v) => v === minBacon) + 1;
console.log(answer);
