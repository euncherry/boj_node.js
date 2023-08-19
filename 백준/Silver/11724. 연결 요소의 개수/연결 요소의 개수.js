//11724.연결요소의개수.s2
const fs = require("fs");
const filePath = '/dev/stdin';
const inputArr = fs.readFileSync(filePath).toString().trim().split("\n");

//input data setting
const [n, m] = inputArr.shift().split(" ").map(Number);
const inputs = [];

inputArr.map((v) => {
  inputs.push(v.split(" ").map(Number));
});

//solution
let answer = 0;
const graph = [...Array(n)].map((v) => [...Array()]);
const visit = [...Array(n)];
const queue = [];
inputs.map(([a, b]) => {
  graph[a - 1].push(b - 1);
  graph[b - 1].push(a - 1);
});

for (let idx = 0; idx < n; idx++) {
  if (visit[idx]) continue;

  queue.push(idx);
  visit[idx] = true;
  while (1) {
    if (queue.length === 0) break;
    const vector = queue.shift();
    for (let i = 0; i < graph[vector].length; i++) {
      const check = graph[vector][i];
      if (visit[check]) continue;
      queue.push(check);
      visit[check] = 1;
    }
  }
  answer += 1;
}
console.log(answer);
