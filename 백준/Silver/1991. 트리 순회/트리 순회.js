const QNUM = {
  number: 1991,
  title: `트리순회`,
  level: `s1`,
};

/**
 * @method tree
 * @note
 */

const fs = require("fs");

// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'data.txt';
const filePath = !process.env.CODESANDBOX_HOST ? "/dev/stdin" : "data.txt";
let inputs = fs.readFileSync(filePath).toString().trim().split(`\n`);

const N = +inputs[0];
let answer = "";
const lc = [];
const rc = [];
const node = {};

for (let i = 1; i < N + 1; i++) {
  const [n, l, r] = inputs[i].split(" ");
  node[n] = i;
  lc[i] = l;
  rc[i] = r;
}
// console.log(node);
// console.log(lc);
// console.log(rc);

function preorder(cur) {
  answer += cur;
  if (lc[node[cur]] !== ".") preorder(lc[node[cur]]);
  if (rc[node[cur]] !== ".") preorder(rc[node[cur]]);
}
function inorder(cur) {
  if (lc[node[cur]] !== ".") inorder(lc[node[cur]]);
  answer += cur;
  if (rc[node[cur]] !== ".") inorder(rc[node[cur]]);
}

function postorder(cur) {
  if (lc[node[cur]] !== ".") postorder(lc[node[cur]]);
  if (rc[node[cur]] !== ".") postorder(rc[node[cur]]);
  answer += cur;
}
function solution() {
  preorder("A");
  answer += "\n";
  inorder("A");
  answer += "\n";
  postorder("A");
  console.log(answer);
}

solution();
