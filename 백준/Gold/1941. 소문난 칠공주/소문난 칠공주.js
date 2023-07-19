const QNUM = {
  number: 1941,
  title: `소문난 칠공주 `,
  level: `g3`,
};

/**
 * @method backtracking
 * @note
 */

const fs = require("fs");

// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'data.txt';
const filePath = !process.env.CODESANDBOX_HOST ? "/dev/stdin" : "data.txt";

let inputs = fs.readFileSync(filePath).toString().trim().split(`\n`);

const dx = [0, 1, -1, 0];
const dy = [1, 0, 0, -1];
let answer = 0;
const isUsed = [];

const arr = [];

function back(p, pre) {
  if (p === 7) {
    const setArr = arr.map((v) => [parseInt(v / 5), v % 5]);
    let count = 0;
    const posArr = [];
    for (let i = 0; i < 7; i++) {
      // console.log(inputs[parseInt(arr[i] / 5)][arr[i] % 5]);
      if (inputs[parseInt(arr[i] / 5)][arr[i] % 5] === "Y") count++;
      if (count > 3) break;
      posArr[i] = [parseInt(arr[i] / 5), arr[i] % 5];
    }
    if (count < 4) {
      if (isBfs(posArr)) answer += 1;
    }
    return;
  }
  for (let i = pre; i < 25; i++) {
    if (!isUsed[i]) {
      isUsed[i] = true;
      arr[p] = i;
      back(p + 1, i);
      isUsed[i] = false;
    }
  }
}

back(0, 0);

/**
 * @param oriArr [[x,y], ...]
 * @note bfs로 이어져 있는지 확인
 */
function isBfs(oriArr) {
  let count = 0;
  const isOri = [...Array(5)].map((v) => [...Array(5)]);
  oriArr.forEach((v) => (isOri[v[0]][v[1]] = true));
  // console.log(isOri);
  const isVis = [...Array(5)].map((v) => [...Array(5)]);
  const queue = [];
  queue.push([...oriArr[0]]);
  isVis[oriArr[0][0]][oriArr[0][1]] = true;
  while (1) {
    if (queue.length === 0) break;
    const [px, py] = queue.pop();
    count++;
    for (let i = 0; i < 4; i++) {
      const [ix, iy] = [px + dx[i], py + dy[i]];
      if (ix < 0 || iy < 0 || ix >= 5 || iy >= 5) continue;
      if (isVis[ix][iy]) continue;
      if (isOri[ix][iy]) {
        queue.push([ix, iy]);
        isVis[ix][iy] = true;
      }
    }
  }
  // console.log(count);
  return count === 7 ? true : false;
}

console.log(answer);
