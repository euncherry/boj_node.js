const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let inputTxt = fs.readFileSync(filePath).toString().trim().split('\n');

let solution = (input) => {
  let answer = 0;
  let arrLength = Number(input[0]);
  let inputArr = input.slice(1, arrLength + 1);

  inputArr.forEach((value) => {
    if (runningStack(value)) {
      answer += 1;
    }
  });
  console.log(answer);
};

let runningStack = (str) => {
  let stack = [];

  for (let i = 0; i < str.length; i++) {
    let top = stack.pop();
    if (!top) {
      stack.push(str[i]);
      continue;
    }
    if (top === str[i]) {
      continue;
    }
    if (top !== str[i]) {
      stack.push(top);
      stack.push(str[i]);
    }
  }
  if (stack.length === 0) {
    return true;
  } else {
    return false;
  }
};

solution(inputTxt);
