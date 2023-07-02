//15649.N과M(1).s3
/**
 * @method backtracking
 * @note
 */

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'data.txt';
let [N, M] = fs.readFileSync(filePath).toString().trim().split(' ').map(Number);

const arr = Array(M);
const isUsed = Array(N + 1);

const answer = [];

function solution(index) {
  if (index === M) {
    return answer.push(arr.join(' '));
  }
  for (let i = 1; i <= N; i++) {
    if (!isUsed[i]) {
      isUsed[i] = 1;
      arr[index] = i;
      solution(index + 1);
      isUsed[i] = 0;
    }
  }
}

solution(0);
console.log(answer.join('\n'));
