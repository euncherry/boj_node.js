const QNUM = {
  number: 1043,
  title: `거짓말`,
  level: `g4`,
};

/**
 * @method graph
 * @note
 */

const fs = require("fs");

// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'data.txt';
const filePath = !process.env.CODESANDBOX_HOST ? "/dev/stdin" : "data.txt";
solution();
function solution() {
  let inputs = fs.readFileSync(filePath).toString().trim().split(`\n`);

  const [N, M] = inputs[0].split(" ").map(Number);

  const pino = inputs[1].split(" ");
  if (pino.length === 1) {
    return console.log(M);
  }
  const pinoNum = +pino[0];
  const pinoArr = [];
  pino.forEach((v, i) => {
    if (i !== 0) return (pinoArr[+v] = true);
  });


  const graph = [...Array(N + 1)].map((v) => [...Array()]);
  for (let i = 2; i < inputs.length; i++) {
    if (+inputs[i][0] === 1) continue;
    const edge = inputs[i].split(" ");
    for (let j = 1; j < +edge[0]; j++) {
      graph[edge[j]].push(+edge[j + 1]);
      graph[edge[j + 1]].push(+edge[j]);
    }
  }


  let answer = M;
  const isVis = [];
  let isBool = false;
  for (let i = 2; i < inputs.length; i++) {
    isVis.length = 0;
    isBool = false;
    const group = inputs[i].split(" ");
    for (let j = 1; j <= +group[0]; j++) {
      if (isVis[+group[j]]) continue;
      DFS(+group[j]);
      if (pinoArr[+group[j]] || isBool) {
        answer -= 1;
        break;
      }
    }
  }

  function DFS(node) {
    if (isVis[node]) return;
    isVis[node] = true;
    for (let i = 0; i < graph[node].length; i++) {
      const val = graph[node][i];
      if (pinoArr[val]) {
        isBool = true;
        return true;
      }
      if (!isVis[val]) {
        DFS(val);
      }
    }
  }
  console.log(answer);
}
