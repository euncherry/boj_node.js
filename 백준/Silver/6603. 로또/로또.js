const QNUM = {
  number: 6603,
  title: `로또 sdsd`,
  level: `s2`,
};

/**
 * @method backtracking
 * @note
 */

const fs = require("fs");

// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'data.txt';
const filePath = !process.env.CODESANDBOX_HOST ? "/dev/stdin" : "data.txt";

let inputs = fs.readFileSync(filePath).toString().trim().split(`\n`);
inputs.pop();
let answer = "";
const arr = [];

inputs.forEach((v) => {
  const [k, ...S] = v.split(" ").map(Number);
  const isUsed = [];

  function solution(p, st) {
    if (p === 6) {
      answer += arr.join(" ");
      answer += "\n";

      return;
    }
    for (let i = st; i < k; i++) {
      // if (p === 0 && i >= k - 6) break;
      if (!isUsed[i]) {
        arr[p] = S[i];
        isUsed[i] = true;
        solution(p + 1, i);
        isUsed[i] = false;
      }
    }
  }
  solution(0, 0);
  answer += "\n";
});

console.log(answer);

// console.log(QNUM);
