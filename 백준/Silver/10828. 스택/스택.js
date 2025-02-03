//10828.스택.s4
/**
 * @입력값 N <= 100000
 * @시간 0.5
 * @시간복잡도 O(NlogN|| N || logN || 1) -> N^2불가능
 * @method Stack
 * @note Stack 구현하기
 */
const fs = require("fs");
const filePath = !process.env.CODESANDBOX_HOST ? "/dev/stdin" : "data.txt";

let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, ...cases] = input;

class Stack {
  constructor() {
    this.items = [];
    this.pos = 0;
  }
  push(val) {
    this.items[this.pos] = val;
    this.pos += 1;
  }
  pop() {
    if (this.pos === 0) return -1;
    this.pos -= 1;
    return this.items[this.pos];
  }
  size() {
    return this.pos;
  }
  empty() {
    return this.pos === 0 ? 1 : 0;
  }
  top() {
    return this.pos === 0 ? -1 : this.items[this.pos - 1];
  }
}

const stack = new Stack();

const answer = [];

cases.forEach((command) => {
  const [cmd, val] = command.split(" ");
  switch (cmd) {
    case "push":
      stack.push(val);
      break;
    case "pop":
      answer.push(stack.pop());
      break;
    case "size":
      answer.push(stack.size());
      break;
    case "empty":
      answer.push(stack.empty());
      break;
    case "top":
      answer.push(stack.top());
      break;
  }
});

console.log(answer.join(`\n`));
