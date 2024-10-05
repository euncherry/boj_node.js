const fs = require("fs");
const filePath = !process.env.CODESANDBOX_HOST ? "/dev/stdin" : "data.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [T, ...cases] = input.map(Number);

const dist = [1, 1, 2, 4];

for (let i = 4; i < 11; i++) {
  dist[i] = dist[i - 1] + dist[i - 2] + dist[i - 3];
}

let answer = "";
cases.forEach((v) => (answer += `${dist[v]}\n`));

console.log(answer);