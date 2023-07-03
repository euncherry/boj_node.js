//15654.N과M(5).s3
/**
 * @method backtracking
 * @inputs 1 2 3 4(x) 배열이 주어짐
 * @note [중복없이][사전순으로 증가]
 */

const fs = require("fs");

// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'data.txt';
const filePath = !process.env.CODESANDBOX_HOST ? "/dev/stdin" : "data.txt";

let [nums, inputs] = fs.readFileSync(filePath).toString().trim().split(`\n`);

const [N, M] = nums.split(" ").map(Number);
inputs = [...inputs.split(" ")].map(Number).sort((a, b) => a - b);

let answer = "";
const isUsed = [];
const arr = [];

function solution(p) {
  if (p === M) {
    answer += arr.join(" ");
    answer += `\n`;
    return;
  }
  for (let i = 0; i < N; i++) {
    if (!isUsed[i]) {
      arr[p] = inputs[i];
      isUsed[i] = true;
      solution(p + 1);
      isUsed[i] = false;
    }
  }
}
solution(0);
console.log(answer);
