const fs = require('fs');
const filePath = '/dev/stdin';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const [num, ...inputArr] = input;

const paper = [];
inputArr.map(v => {
  return paper.push(v.split(' ').map(Number));
})
const answer = [0,0,0];



//숫자 확인
/** 
* params {n , r, c} 길이,행,열
*/
function checkNum(n,r,c){
  const stand = paper[r][c];
  for(let i = r; i<n+r ; i++){
    for(let j = c ; j<n+c;j++){
      if(stand !== paper[i][j]) {
        return true;
      };
    }
  }
  answer[stand+1] += 1;
  return null;
  
}

// 재귀함수
function recursive(n, r, c) {
  if (n === 1) {
    return;
  };
  
  let len = n / 3;
  
  for (let i = r; i < r+n; i += len) {
    for (let j = c; j < c+n; j += len) {
      if(checkNum(len , i , j)===null)continue;
      recursive(len, i , j);
    }
  }
}


function solution(){
  const target = paper[0][0];
  for(let i =0 ; i<num ; i++){
    for(let j = 0 ; j<num ; j++){
      if(target !== paper[i][j]){
          return recursive(Number(num), 0, 0) 
      }
    }
  }
  return answer[target+1] += 1;
}

solution()
  console.log( answer[0])
console.log( answer[1])
console.log( answer[2])