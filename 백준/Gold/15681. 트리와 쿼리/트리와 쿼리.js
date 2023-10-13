const QNUM = {
  method: `Tree`,
  number: 15681,
  title: `트리와쿼리`,
  level: `g5`,
};

const fs = require('fs');
const filePath = !process.env.CODESANDBOX_HOST ? '/dev/stdin' : 'data.txt';
let inputs = fs.readFileSync(filePath).toString().trim().split(`\n`);

const [N, R, Q] = inputs[0].split(' ').map(Number);

const tree = [...Array(N + 1)].map((v) => [...Array()]);

for (let i = 1; i < inputs.length - Q; i++) {
  const [f, e] = inputs[i].split(' ').map(Number);
  tree[f].push(e);
  tree[e].push(f);
}
// console.log(tree);

const arr = [...Array(N + 1)].fill(0);
function DFS(node, par) {
  // console.log(node)
  for (inj of tree[node]) {
    if (inj === par) continue;
    arr[node] += 1;
    DFS(inj, node);
  }
  // console.log(node,par)
  return (arr[par] += arr[node]);
}
DFS(R, 0);
// console.log(arr);


let answer = "";

for(let i = inputs.length - Q ; i<inputs.length ; i++){
  answer += `${arr[inputs[i]]+1}\n`
}

console.log(answer)