//11725.트리의부모찾기.s2
const fs = require("fs");
const filePath = '/dev/stdin';
const [inputNum, ...inputArr] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

//input data setting
const nodeNum = Number(inputNum);

//graph setting
const graph = [...Array(nodeNum)].map((v) => [...Array()]);


inputArr.forEach((value) => {
  const [a,b]=value.split(' ').map(Number)
  graph[a - 1].push(b - 1);
  graph[b - 1].push(a - 1);
});



//solution
const answer = Array(nodeNum);
//function DFS
function DFS(parent, vector) {
  answer[vector] = parent + 1;
  graph[vector].forEach((value, idx) => {
    if (!answer[value]) DFS(vector, value);
  });
}

DFS(0,0);

let result = "";
answer.shift()
answer.forEach((ans)=> result+= ans+"\n");
console.log(result)
