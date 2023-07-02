//15650.N과M(2).s3
/**
 * @method backtracking
 * @note
 */

const fs = require("fs");

// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'data.txt';
const filePath = !process.env.CODESANDBOX_HOST ? "/dev/stdin" : "data.txt";

let inputs = fs.readFileSync(filePath).toString().trim().split(" ");

const N = +inputs[0];
const M = +inputs[1];
let answer = "";
const isUsed = Array(N + 1);
const arr = [];

function solution(idx, pre) {
  if (idx === M) {
    answer += arr.join(" ");
    answer += `\n`;
    return;
  }
  for (let i = 1; i <= N; i++) {
    if (isUsed[i]) continue;
    if (i < pre) continue;
    isUsed[i] = true;
    arr[idx] = i;
    solution(idx + 1, i);
    isUsed[i] = false;
  }
}

solution(0, 0);
console.log(answer);
