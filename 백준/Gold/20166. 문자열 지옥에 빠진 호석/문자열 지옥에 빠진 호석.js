
/**
 * @method 해시
 */

const fs = require("fs");

// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'data.txt';
const filePath = !process.env.CODESANDBOX_HOST ? "/dev/stdin" : "data.txt";
let inputs = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, M, K] = inputs[0].split(" ").map(Number);

const world = [];

for (let i = 1; i < N + 1; i++) {
  world.push(inputs[i]);
}

const hash = {};
const trys = {};
for (let i = N + 1; i < inputs.length; i++) {
  hash[inputs[i]] = 0;
  trys[inputs[i][0]] = trys[inputs[i][0]]
    ? Math.max(trys[inputs[i][0]], inputs[i].length)
    : inputs[i].length;
}

// console.log(world);
// console.log(hash);
// console.log(trys);

function move(i, r, c, maxLen, str) {
  if (r === -1) r = N - 1;
  if (c === -1) c = M - 1;
  if (r === N) r = 0;
  if (c === M) c = 0;
  //test //arr[r][c] 가 answer[i] 와 다르면 return;
  str += world[r][c];
  // console.log(str);
  if (hash[str] >= 0) {
    hash[str]++;
  }
  if (i === maxLen - 1) return;

  move(i + 1, r - 1, c, maxLen, str); //위
  move(i + 1, r + 1, c, maxLen, str); //아래
  move(i + 1, r, c - 1, maxLen, str); //좌
  move(i + 1, r, c + 1, maxLen, str); // 우
  move(i + 1, r - 1, c - 1, maxLen, str); //대각선 //왼쪽 위
  move(i + 1, r + 1, c - 1, maxLen, str); //대각선 //왼쪽 아래
  move(i + 1, r - 1, c + 1, maxLen, str); //대각선 //오른쪽 위
  move(i + 1, r + 1, c + 1, maxLen, str); //대각선 //오른쪽 아래
}

for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (trys[world[i][j]]) {
      move(0, i, j, trys[world[i][j]], "");
    }
  }
}

// console.log(hash);

let answer = "";
for (let i = N + 1; i < inputs.length; i++) {
  answer += `${hash[inputs[i]]} \n`;
}
console.log(answer);
