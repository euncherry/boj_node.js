//15652.N과M(4).s3
/**
 * @method backtracking
 * @note for문 초기값 설정
 */

const fs = require("fs");

// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'data.txt';
const filePath = !process.env.CODESANDBOX_HOST ? "/dev/stdin" : "data.txt";

let inputs = fs.readFileSync(filePath).toString().trim().split(" ");

const N = +inputs[0];
const M = +inputs[1];
let answer = "";
const arr = [];

function solution(p) {
  if (p === M) {
    answer += arr.join(" ");
    answer += `\n`;
    return;
  }
  // 비내림차순 -> arr[p-1]보다 작은 수만 안됨 === 크거나 같은수 가능
  // p가 0일경우 st = 1
  // p가 0일 경우를 제외한 재귀함수는 arr[p-1]과 초기값(st)이 같은 for문을 돌면됨
  for (let st = arr[p - 1] || 1; st <= N; st++) {
    // console.log("arr[p-1]", arr[p - 1], `p : ${p} , st :${st}`);
    arr[p] = st;
    solution(p + 1);
  }
}
solution(0);
console.log(answer);
