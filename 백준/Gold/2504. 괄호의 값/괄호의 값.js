//2504.괄호의값.g5
/**
 * @입력값 N <= 30
 * @시간 1
 * @시간복잡도 O( N^2 || NlogN || N || logN || 1) -> N^2 가능
 * @method Stack
 * @note
 */

const fs = require("fs");
const filePath = !process.env.CODESANDBOX_HOST ? "/dev/stdin" : "data.txt";

let inputs = fs.readFileSync(filePath).toString().trim().split("");

const stack = [];
let mul = 1;

for (let i = 0; i < inputs.length; i++) {
  if (inputs[i] === "(") {
    stack.push([inputs[i], mul]);
    mul = 1;
  }
  if (inputs[i] === "[") {
    stack.push([inputs[i], mul]);
    mul = 1;
  }
  if (inputs[i] === ")") {
    if (stack.length === 0 || stack.at(-1)[0] !== "(") return console.log(0);
    mul *= 2;
    const tMul = stack.pop()[1];
    if (tMul !== 1) {
      mul += tMul;
    }
  }
  if (inputs[i] === "]") {
    if (stack.length === 0 || stack.at(-1)[0] !== "[") return console.log(0);
    mul *= 3;
    const tMul = stack.pop()[1];
    if (tMul !== 1) {
      mul += tMul;
    }
  }
}
console.log(stack.length !== 0 ? 0 : mul);
