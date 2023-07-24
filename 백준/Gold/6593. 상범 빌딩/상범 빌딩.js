//6593.상범빌딩.g5

const fs = require('fs');
const filePath = '/dev/stdin';

let [initLen , ...inputs] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

let answer = [];
const news = [[0,0,1], [0,0,-1], [0,1,0],[0,-1,0],[-1,0,0],[1,0,0]]


function solution() {
  
const len = initLen.split(' ').map(Number)
if(len[0] === 0 && len[1]===0 && len[2]===0){
      return;
  }
const inputLen = [0,0,0];
const sIndex = [];
  let build = [...Array(len[0])].map((v)=>[...Array()]);
for(const value of inputs){
  if(len[0]===inputLen[0]){
    answer.push(BFS(build , sIndex , len));
    const [L,R,C] = value.split(' ').map(Number);
    if(L === 0 && R===0 && C===0){
      break;
    }
    len[0] = L; len[1] = R; len[2] = C;
    build = Array.from({length : len[0]} , v=>[...Array()])
    inputLen[0] = 0; inputLen[1] = 0; 
    continue;
  }
  if(value === '') {
    inputLen[0] += 1;
    inputLen[1] = 0;
    continue;
  }
  build[inputLen[0]].push([...value].map((v,idx)=> {
    if(v=== "."){
      return false;
    }
    if(v === "S"){
      sIndex[0] = inputLen[0];
      sIndex[1] = inputLen[1];
      sIndex[2] = idx;
    }
    
    return v;
  }))
    inputLen[1] += 1;
}

}


function BFS(ori,sIdx,oriLen) {
  const queue = [];
  queue.push([sIdx[0],sIdx[1],sIdx[2],0]);
  ori[sIdx[0]][sIdx[1]][sIdx[2]] = 1;
  while(1){
    if(queue.length===0)break;
    const [h,x,y,count] = queue.shift();
    for([dh,dx,dy] of news){
      const mh = h + dh;
      const mx = x + dx;
      const my = y + dy;
      if(mx <0 || mx>=oriLen[1]||my<0||my>=oriLen[2]|| mh < 0 ||mh>=oriLen[0]) continue;
      if(ori[mh][mx][my] ==="E"){
        return `Escaped in ${count+1} minute(s).`
      }
      if(ori[mh][mx][my]) continue;
      queue.push([mh , mx, my , count+1])
      ori[mh][mx][my]=1;
    }
  }
  return 'Trapped!'
}


//solution
solution();
console.log(answer.join("\n"))
