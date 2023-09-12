/**
 * @method 해시
 */

const fs = require("fs");

// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'data.txt';
const filePath = !process.env.CODESANDBOX_HOST ? "/dev/stdin" : "data.txt";
let [num, ...inputs] = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, M] = num.split(" ").map(Number);
const cctvArr = [];

inputs = inputs.map((v) => {
  return v.split(" ").map(Number);
});

const types = [
  [],
  [["up"], ["down"], ["left"], ["right"]],
  [
    ["up", "down"],
    ["left", "right"],
  ],
  [
    ["up", "right"],
    ["down", "right"],
    ["down", "left"],
    ["up", "left"],
  ],
  [
    ["up", "left", "right"],
    ["up", "down", "right"],
    ["down", "left", "right"],
    ["up", "down", "left"],
  ],
  [["up", "down", "left", "right"]],
];

let totalCount = N * M;
let cctvCount = 0;
const cctvCases = [];
inputs.forEach((v, i) => {
  v.forEach((c, j) => {
    if (c > 0 && c < 6) {
      cctvCount++;
      cctvArr.push({
        xy: [i, j],
        num: c,
      });
      cctvCases.push([...Array(types[c].length)].map((v) => new Set()));
    } else if (c === 6) {
      totalCount--;
    }
  });
});

for (let i = 0; i < cctvArr.length; i++) {
  const cctv = cctvArr[i];
  distance(cctv.xy[0], cctv.xy[1], "up", i);
  distance(cctv.xy[0], cctv.xy[1], "down", i);
  distance(cctv.xy[0], cctv.xy[1], "left", i);
  distance(cctv.xy[0], cctv.xy[1], "right", i);
}

function distance(r, c, dir, idx) {
  if (r < 0 || r >= N || c < 0 || c >= M) return;
  if (inputs[r][c] === 6) return;
  const cctvNum = cctvArr[idx].num;
  types[cctvNum].forEach((d, i) => {
    if (d.includes(dir)) cctvCases[idx][i].add(`${r}${c}`);
  });

  if (dir === "up") return distance(r - 1, c, "up", idx); //상
  if (dir === "down") return distance(r + 1, c, "down", idx); //하
  if (dir === "left") return distance(r, c - 1, "left", idx); //좌
  if (dir === "right") return distance(r, c + 1, "right", idx); //우
}

// console.log(cctvArr);
// console.log(types);
// console.log(cctvCases);

// const answer = [];
let answer = N * M;
solution(0, new Set());
//cctv 방향
function solution(idx, cctvSet) {
  if (idx === cctvCount) {
    // answer.push(totalCount - cctvSet.size);
    answer = Math.min(answer, totalCount - cctvSet.size);
    return;
  }
  cctvCases[idx].forEach((pos) => {
    solution(idx + 1, new Set([...pos, ...cctvSet]));
  });
}

console.log(answer);
