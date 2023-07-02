//9663.N-Queen.g4
/**
 * @method backtracking
 * @note isUsed를 4x4배열이 아닌 queen의 이동방향별로 배열을 선언하여 확인
 */

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'data.txt';
let N = fs.readFileSync(filePath).toString().trim();

N = Number(N);
let answer = 0;

//isUsed setting
const isCol = []; // 열
const isUp = []; // ↗︎ //x+y
const isDown = []; // ↘︎ //x-y+N

/**
 * @param {Number} n - Q의 row위치
 */
function solution(n) {
  if (n === N) {
    answer += 1;
    return;
  }
  for (let i = 0; i < N; i++) {
    if (isCol[i] || isUp[n + i] || isDown[n - i + N]) {
      continue;
    }
    isCol[i] = true;
    isUp[n + i] = true;
    isDown[n - i + N] = true;
    solution(n + 1);
    isCol[i] = false;
    isUp[n + i] = false;
    isDown[n - i + N] = false;
  }
}

solution(0);
console.log(answer);
