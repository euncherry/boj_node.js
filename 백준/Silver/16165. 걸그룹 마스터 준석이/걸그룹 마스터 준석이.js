/**
 * @method 해시
 */

const fs = require("fs");

// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'data.txt';
const filePath = !process.env.CODESANDBOX_HOST ? "/dev/stdin" : "data.txt";
let inputs = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, M] = inputs[0].split(" ").map(Number);
const hash = {};
const answer = [];
let team = "";
let teamCount = 0;
for (let i = 1; i < inputs.length; i++) {
  if (+inputs[i] >= 0) {
    for (let j = 1; j <= +inputs[i]; j++) {
      hash[team].push(inputs[i + j]);
      hash[inputs[i + j]] = team;
    }
    i += +inputs[i];
    continue;
  }
  teamCount += 1;
  if (teamCount > N) {
    solution(i);
    break;
  }
  team = inputs[i];
  hash[team] = [];
}

function solution(idx) {
  for (let i = idx; i < inputs.length; i++) {
    if (hash[inputs[i]]) {
      Array.isArray(hash[inputs[i]])
        ? answer.push(hash[inputs[i]].sort())
        : answer.push(hash[inputs[i]]);
    }
  }
}

console.log(answer.flat().join("\n"));
