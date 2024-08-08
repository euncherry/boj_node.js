const fs = require("fs");
const filePath = !process.env.CODESANDBOX_HOST ? "/dev/stdin" : "data.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
input.pop();

function check(lines) {
  const stack = [];
  for (let i = 0; i < lines.length; i++) {
    if (lines[i] === "(" || lines[i] === "[") {
      stack.push(lines[i]);
      continue;
    }
    if (lines[i] === ")") {
      if (stack[stack.length - 1] !== "(") {
        return "no";
      }
      stack.pop();
      continue;
    }
    if (lines[i] === "]") {
      if (stack[stack.length - 1] !== "[") {
        return "no";
      }
      stack.pop();
      continue;
    }
  }
  if (stack.length !== 0) return "no";
  return "yes";
}

const ans = input.map((lines) => {
  return check(lines);
});

console.log(ans.join("\n"));
