const QNUM = {
  number: 15664,
  title: `N과M(10)`,
  level: `s2`,
};

/**
 * @method backtracking
 * @inputs 1 2 3 4(x) 배열이 주어짐 (중복가능)
 * @note [비내림차순]
 */

const fs = require("fs");

// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'data.txt';
const filePath = !process.env.CODESANDBOX_HOST ? "/dev/stdin" : "data.txt";

let [nums, inputs] = fs.readFileSync(filePath).toString().trim().split(`\n`);

const [N, M] = nums.split(" ").map(Number);
inputs = [...inputs.split(" ")].map(Number).sort((a, b) => a - b);

let answer = "";
const arr = [];
/**
 * @같은수 앞에 선택된 숫자와 마지막 숫자가 같은 경우
 */
function solution(p, pPre) {
  if (p === M) {
    answer += arr.join(" ");
    answer += `\n`;
    return;
  }
  let pre = null;
  for (let i = pPre; i < N; i++) {
    if (pre !== inputs[i]) {
      pre = inputs[i];
      arr[p] = inputs[i];
      solution(p + 1, i + 1);
    }
  }
}

solution(0, 0);
console.log(answer);

// console.log(QNUM);
