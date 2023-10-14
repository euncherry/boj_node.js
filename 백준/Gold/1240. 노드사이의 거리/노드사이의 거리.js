const QNUM = {
  method: `Tree`,
  number: 1240,
  title: `노드사이의거리`,
  level: `g5`,
};

const fs = require("fs");
const filePath = !process.env.CODESANDBOX_HOST ? "/dev/stdin" : "data.txt";
let inputs = fs.readFileSync(filePath).toString().trim().split(`\n`);

const [N, M] = inputs[0].split(" ").map(Number);

const tree = [...Array(N + 1)].map((v) => [...Array()]);

for (let i = 1; i < N; i++) {
  const [f, e, c] = inputs[i].split(" ").map(Number);
  tree[f].push([e, c]);
  tree[e].push([f, c]);
}

function solution(front, end) {
  let ans = 0;

  function DFS(node, par, dis) {
    for (adj of tree[node]) {
      if (adj[0] === par) continue;
      if (adj[0] === end) {
        ans = dis + adj[1];
        return;
      }
      DFS(adj[0], node, dis + adj[1]);
    }
  }

  DFS(front, 0, 0);
  return ans;
}

let answer = "";

for (let i = N; i < inputs.length; i++) {
  const [f, e] = inputs[i].split(" ").map(Number);
  answer += solution(f, e);
  answer += "\n";
}

console.log(answer);

