const QNUM = {
  number: 1759,
  title: `암호 만들기 `,
  level: `g5`,
};

/**
 * @method backtracking
 * @note
 */

const fs = require("fs");

// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'data.txt';
const filePath = !process.env.CODESANDBOX_HOST ? "/dev/stdin" : "data.txt";

let inputs = fs.readFileSync(filePath).toString().trim().split(`\n`);
const [L, C] = inputs[0].split(" ").map(Number);
const input = inputs[1].split(" ").sort();
let answer = "";
const arr = [];
const isUsed = [];
const check = [0, 0];
const vowel = ["a", "e", "i", "o", "u"];
function solution(lev, st) {
  if (lev === L) {
    check[0] = 0;
    check[1] = 0;
    arr.forEach((str) => {
      vowel.includes(str) ? (check[0] += 1) : (check[1] += 1);
    });
    if (check[0] !== 0 && check[1] >= 2) {
      answer += arr.join("");
      answer += "\n";
    }
    return;
  }
  for (let i = st; i < C; i++) {
    if (!isUsed[i]) {
      arr[lev] = input[i];
      isUsed[i] = true;
      solution(lev + 1, i);
      isUsed[i] = false;
    }
  }
}

solution(0, 0);

console.log(answer);