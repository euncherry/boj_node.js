//10799.쇠막대기.s2
/**
 * @입력값 N <= 100,000
 * @시간 1
 * @시간복잡도 O( NlogN || N || logN || 1) -> N^2불가능
 * @method Stack
 * @note ) -> 레이져 += 스택의 길이
 * @note ) -> 쇠막대기 += 1
 */


const fs = require("fs");
const filePath = !process.env.CODESANDBOX_HOST ? "/dev/stdin" : "data.txt";

let inputs = fs.readFileSync(filePath).toString().trim().split("");


const stack = [];

const answer = inputs.reduce((acc, cur, idx)=>{
  if(cur === '(') stack.push(cur);
  if(cur === ')'){
    stack.pop();
    if(inputs[idx-1]==="(") return acc += stack.length;
    return acc += 1;
  }
  return acc;
},0)

console.log(answer)