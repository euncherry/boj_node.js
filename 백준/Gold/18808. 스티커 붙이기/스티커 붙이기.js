/**
 * @method 시뮬레이션
 */

const fs = require("fs");

// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'data.txt';
const filePath = !process.env.CODESANDBOX_HOST ? "/dev/stdin" : "data.txt";
let [num, ...inputs] = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, M, K] = num.split(" ").map(Number);

const stickers = [];
for (let i = 0; i < inputs.length; i++) {
  const [sn, sm] = inputs[i].split(" ").map(Number);
  stickers.push({
    rowLen: sn,
    colLen: sm,
    area: [],
  });
  for (let j = 1; j <= sn; j++) {
    inputs[i + j].split(" ").forEach((v, i) => {
      if (+v === 1) stickers[stickers.length - 1].area.push([j - 1, i]);
    });
    // stickers[stickers.length - 1].area.push(
    //   inputs[i + j].split(" ").map(Number)
    // );
  }
  i += sn;
}

function rotate(sticker, angle) {
  return sticker.area.map((v) => {
    const [x, y] = v;
    if (angle === 0) return [x, y];
    if (angle === 1) return [y, -x + sticker.rowLen - 1];
    if (angle === 2) return [-x + sticker.rowLen - 1, -y + sticker.colLen - 1];
    if (angle === 3) return [-y + sticker.colLen - 1, x];
  });
}

const note = [...Array(N)].map((v) => [...Array(M).fill(0)]);

function put(stk) {
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      let count = 0;
      for (let s = 0; s < stk.length; s++) {
        const [vx, vy] = [stk[s][0] + i, stk[s][1] + j];
        if (vx >= N || vy >= M) break;
        if (note[vx][vy]) break;
        count++;
      }
      if (count === stk.length) return [i, j];
    }
  }
  return false;
}

let answer = stickers.reduce((total, sticker, i) => {
  let isPut = false;
  for (let ro = 0; ro < 4; ro++) {
    const stk = rotate(sticker, ro);
    isPut = put(stk);
    if (isPut) {
      // console.log("붙이기 가능", i, ro);
      stk.forEach((v) => {
        note[v[0] + isPut[0]][v[1] + isPut[1]] = i + 1;
      });
      return (total += stk.length);
    }
  }
  return total;
}, 0);

console.log(answer);
