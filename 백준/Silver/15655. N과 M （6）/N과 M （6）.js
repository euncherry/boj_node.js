//15654.N과M(6).s3
/**
 * @method backtracking
 * @inputs 1 2 3 4(x) 배열이 주어짐
 * @note [중복없이][오름차순]
 */

const fs = require("fs");

// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'data.txt';
const filePath = !process.env.CODESANDBOX_HOST ? "/dev/stdin" : "data.txt";

let [nums, inputs] = fs.readFileSync(filePath).toString().trim().split(`\n`);

const [N, M] = nums.split(" ").map(Number);
inputs = [...inputs.split(" ")].map(Number).sort((a, b) => a - b);

let answer = "";
const arr = [];

function solution(p) {
  if (p === M) {
    answer += arr.map((v) => inputs[v]).join(" ");
    answer += `\n`;
    return;
  }
  for (let st = arr[p - 1] + 1 || 0; st < N; st++) {
    arr[p] = st;
    solution(p + 1);
  }
}
solution(0);
console.log(answer);
