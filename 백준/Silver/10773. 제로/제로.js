//10773.제로.s4
/**
 * @입력값 N <= 100000
 * @시간 1
 * @시간복잡도 O(NlogN|| N || logN || 1) -> N^2불가능
 * @method Stack
 *
 * @note stack.push -> 0을 제외한 수
 * @note stack.pop -> 0
 */
const fs = require("fs");
const filePath = !process.env.CODESANDBOX_HOST ? "/dev/stdin" : "data.txt";

let input = fs.readFileSync(filePath).toString().trim().split("\n");
const numbers = input.slice(1).map(Number);

const stack = [];
const answer = numbers.reduce((acc, cur) => {
  if (cur === 0) {
    return acc - stack.pop();
  }
  stack.push(cur);
  return (acc += cur);
}, 0);

console.log(answer);
