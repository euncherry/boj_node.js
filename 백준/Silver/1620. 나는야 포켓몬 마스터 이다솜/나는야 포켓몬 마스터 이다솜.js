const QNUM = {
  number: 1620,
  title: `나는야포켓몬마스터이다솜`,
  level: `s4`,
};

/**
 * @method 해시
 * @note
 */

const fs = require("fs");

// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'data.txt';
const filePath = !process.env.CODESANDBOX_HOST ? "/dev/stdin" : "data.txt";
let inputs = fs.readFileSync(filePath).toString().trim().split(`\n`);

const [N, M] = inputs[0].split(" ").map(Number);

const monObj = {};
const monArr = [];
let answer = "";
for (let i = 1; i <= N; i++) {
  monObj[inputs[i]] = i;
  monArr[i] = inputs[i];
}

// console.log(monArr);
// console.log(monObj);

for (let i = 1 + N; i <= M + N; i++) {
  if (+inputs[i]) {
    answer += `${monArr[+inputs[i]]} \n`;
  } else {
    answer += `${monObj[inputs[i]]} \n`;
  }
}

console.log(answer);
