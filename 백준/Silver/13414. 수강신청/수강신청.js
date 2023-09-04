const QNUM = {
  number: 13414,
  title: `수강신청`,
  level: `s3`,
};

/**
 * @method 해시
 * @note
 */

const fs = require("fs");

// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'data.txt';
const filePath = !process.env.CODESANDBOX_HOST ? "/dev/stdin" : "data.txt";
let inputs = fs.readFileSync(filePath).toString().trim().split(`\n`);

const [K, L] = inputs[0].split(" ").map(Number);

let answer = "";
const obj = {};
const arr = [];

for (let i = 1; i < L + 1; i++) {
  obj[inputs[i]] = i;
  arr[i] = inputs[i];
}

const values = Object.values(obj).sort((a, b) => a - b);

for (let i = 0; i < K; i++) {
  if (!arr[values[i]]) break;
  answer += `${arr[values[i]]} \n`;
}

console.log(answer);
