//15654.N과M(6).s3
/**
 * @method backtracking
 * @inputs 1 2 3 4(x) 배열이 주어짐
 * @note [같은수 여러번 선택 가능][사전순으로 증가]
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
  let tmp = "🥺";

  if (p === M) {
    answer += arr.join(" ");
    answer += "\n";
    return;
  }
  for (let i = 0; i < N; i++) {
    tmp = i;
    arr[p] = inputs[i];
    solution(p + 1);
  }
}

solution(0);
console.log(answer);
//
