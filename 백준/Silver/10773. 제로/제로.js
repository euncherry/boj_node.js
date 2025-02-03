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
const [K, ...Kn] = input;
const nums = Kn.map(Number);

const stack = [];
let answer = 0;
nums.forEach((val) => {
  if (val !== 0) {
    stack.push(val);
    answer += val;
  }
  if (val === 0) {
    answer -= stack.pop();
  }
});

console.log(answer);
