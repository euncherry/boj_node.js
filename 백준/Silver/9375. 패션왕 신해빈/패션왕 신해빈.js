const QNUM = {
  number: 9375,
  title: `패션왕신해빈`,
  level: `s3`,
};

/**
 * @method 해시
 */

const fs = require("fs");

// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'data.txt';
const filePath = !process.env.CODESANDBOX_HOST ? "/dev/stdin" : "data.txt";
let inputs = fs.readFileSync(filePath).toString().trim().split(`\n`);
inputs.push("0");
const cases = +inputs[0];
const answer = [];
let obj = {};

for (let i = 2; i < inputs.length; i++) {
  if (+inputs[i] >= 0) {
    const count = Object.values(obj);
    const result = count.reduce((acc, cur) => {
      acc *= cur + 1;
      return acc;
    }, 1);
    answer.push(result - 1);
    obj = {};
    continue;
  }
  const [name, type] = inputs[i].split(" ");
  obj[type] ? (obj[type] += 1) : (obj[type] = 1);
}
console.log(answer.join("\n"));
