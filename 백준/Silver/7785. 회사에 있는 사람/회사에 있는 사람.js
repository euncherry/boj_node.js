const QNUM = {
  number: 7785,
  title: `회사에있는사람`,
  level: `s5`,
};

/**
 * @method 해시
 * @note
 */

const fs = require("fs");

// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'data.txt';
const filePath = !process.env.CODESANDBOX_HOST ? "/dev/stdin" : "data.txt";
let inputs = fs.readFileSync(filePath).toString().trim().split(`\n`);

const N = +inputs[0];

const log = {};
const answer = [];
for (let i = 1; i <= N; i++) {
  const [name, state] = inputs[i].split(" ");
  log[name] = state;
}

for (let [key, value] of Object.entries(log)) {
  if (value === "enter") answer.push(key);
}

answer.sort((a, b) => {
  if (a < b) return 1;
  if (a === b) return 0;
  if (a > b) return -1;
});
// console.log(answer);
console.log(answer.join("\n"));
