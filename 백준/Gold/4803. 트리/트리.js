const QNUM = {
  number: 1780,
  title: `종이의개수`,
  level: `s2`,
};

/**
 * @method recursive
 */

const fs = require("fs");

// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'data.txt';
const filePath = !process.env.CODESANDBOX_HOST ? "/dev/stdin" : "data.txt";
let inputs = fs.readFileSync(filePath).toString().trim().split(`\n`);

let answer = '';
let caseNum = 0;
for(let i = 0 ; i<inputs.length-1 ; i++){
  caseNum+= 1;
  const [N,M] = inputs[i].split(' ').map(Number);
  const graph = [...Array(N+1)].map((v)=>[...Array()]);
  for(let j = i+1 ; j<=M+i;j++){
    const [f,e]  = inputs[j].split(' ').map(Number);
    graph[f].push(e);
    graph[e].push(f);
  }
  answer += `Case ${caseNum}: `
  hasTree(graph,N);
  i += M;
}


function hasTree(graph,N){
  let treeCnt = 0;
  const isVis = [];
  let isCycle = false;
  function DFS(node , par){
    isVis[node] = true;
    for(adj of graph[node]){
      if(adj === par) continue;
      if(isVis[adj]) {
        isCycle = true;
        continue;
      }
      DFS(adj, node)
    }
  }
  for(let i = 1 ; i<=N ; i++){
    if(isVis[i]) continue;
    isCycle = false;
    DFS(i , 0);
    if(!isCycle) treeCnt +=1;
  }

  if(treeCnt === 0) return answer += `No trees.\n`;
  if(treeCnt === 1) return answer += `There is one tree.\n`;
  if(treeCnt > 1) return answer += `A forest of ${treeCnt} trees.\n`

}

console.log(answer)