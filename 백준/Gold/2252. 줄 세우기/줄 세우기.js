const QNUM = {
  method: `위상정렬`,
  number: 2252,
  title: `줄세우기`,
  level: `g3`,
};

const fs = require("fs");
const filePath = !process.env.CODESANDBOX_HOST ? "/dev/stdin" : "data.txt";
let inputs = fs.readFileSync(filePath).toString().trim().split(`\n`);

let answer = "";
const [N, M] = inputs[0].split(" ").map(Number);
const graph = [...Array(N + 1)].map((v) => [...Array()]);
const inde = [...Array(N + 1).fill(0)];
const queue = [];
for (let i = 1; i <= M; i++) {
  const [f, e] = inputs[i].split(" ").map(Number);
  graph[f].push(e);
  inde[e]++;
}

for (let i = 1; i <= N; i++) {
  if (inde[i] === 0) queue.push(i);
}
while (1) {
  if (queue.length === 0) break;
  const deVal = queue.shift();
  answer += `${deVal} `;
  for (let n of graph[deVal]) {
    inde[n]--;
    if (inde[n] === 0) queue.push(n);
  }
}
console.log(answer);
// console.log(QNUM);
