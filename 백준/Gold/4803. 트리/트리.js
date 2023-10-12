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
  //graph 구현
  const graph = [...Array(N+1)].map((v)=>[...Array()]);
  for(let j = i+1 ; j<=M+i;j++){
    const [f,e]  = inputs[j].split(' ').map(Number);
    graph[f].push(e);
    graph[e].push(f);
  }

  answer += `Case ${caseNum}: `
  hasTree(graph,N)
  i += M;
}



function hasTree(graph,N){
  // console.log(graph)

  let treeCnt = 0;
  const isVis = [];
  let isCycle = false;

  //DFS에서 사이클이 존재한다면 tree가 아님
  function DFS(node , par){
    isVis[node] = true; // 방문표시
    for(adj of graph[node]){ // 인접노드확인
      if(adj === par) continue; // 인접노드가 부모라면 continue;
      if(isVis[adj]) { //부모가 아닌 인접노드가 존재한다면
        isCycle = true; // 사이클이 존재함
        continue; // 연결된 노드를 다 확인 해야 하기 때문에 continue;
      }
      DFS(adj, node)
    }
  }
  for(let i = 1 ; i<=N ; i++){
    if(isVis[i]) continue;
    isCycle = false;
    DFS(i , 0);
    //DFS를 돌면서 연결그래프만 나오기 때문에 cycle이 있는지만 확인
    if(!isCycle) treeCnt +=1;
    // console.log(isCycle);
  }
    // console.log("---")

  if(treeCnt === 0) return answer += `No trees.\n`;
  if(treeCnt === 1) return answer += `There is one tree.\n`;
  if(treeCnt > 1) return answer += `A forest of ${treeCnt} trees.\n`

}

console.log(answer)