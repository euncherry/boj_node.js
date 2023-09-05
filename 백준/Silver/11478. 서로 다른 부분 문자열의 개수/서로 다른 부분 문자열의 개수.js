const QNUM = {
  number: 11478,
  title: `서로다른부분문자열의개수`,
  level: `s3`,
};

/**
 * @method 해시
 */

const fs = require("fs");

// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'data.txt';
const filePath = !process.env.CODESANDBOX_HOST ? "/dev/stdin" : "data.txt";
let inputs = fs.readFileSync(filePath).toString().trim().split(``);
const len = inputs.length;
const answer = new Set([...inputs]);

for (let i = 0; i < len; i++) {
  let ans = `${inputs[i]}`;
  for (let j = i + 1; j < len; j++) {
    ans += `${inputs[j]}`;
    answer.add(ans);
  }
}
console.log(answer.size);
