
const fs = require("fs");
const filePath = !process.env.CODESANDBOX_HOST ? "/dev/stdin" : "data.txt";

let input = fs.readFileSync(filePath).toString().trim().split("\n");
input.pop()

const answer = input.map((str)=>{
  const stack = [];
  const len = str.length;

  for(let i = 0 ;i<len ;i++){
    if(str[i]==='(' || str[i]==='[') stack.push(str[i]);
    if(str[i]===')'){
      if(stack[stack.length -1]!== '(' || stack.length === 0) return "no";
      if(stack[stack.length -1]=== '(') stack.pop();
      continue;
    }
    if(str[i]===']'){
      if(stack[stack.length -1]!== '[' || stack.length === 0) return "no";
      if(stack[stack.length -1]=== '[') stack.pop();
      continue;
    }
}
return stack.length === 0 ? "yes" :"no"
})

console.log(answer.join(`\n`))
