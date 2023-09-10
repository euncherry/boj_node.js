const QNUM = {
  number: 19583,
  title: `싸이버개강총회`,
  level: `s2`,
};

/**
 * @method 해시
 */

const fs = require("fs");

// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'data.txt';
const filePath = !process.env.CODESANDBOX_HOST ? "/dev/stdin" : "data.txt";
let inputs = fs.readFileSync(filePath).toString().trim().split("\n");

const regex = /\D+/g; //숫자만 return 하는 정규표현식

const [S, E, Q] = inputs[0].split(" ").map((v) => +v.replace(regex, ""));
const hash = {};
let answer = 0;
// console.log(S, E, Q);

//hash 정의
for (let i = 1; i < inputs.length; i++) {
  const [time, name] = inputs[i].split(" ");
  hash[name]
    ? hash[name].push(+time.replace(regex, ""))
    : (hash[name] = [+time.replace(regex, "")]);
}
// console.log(hash);

//출석확인
for (const value of Object.values(hash)) {
  let enter = false;
  let out = false;
  value.forEach((times) => {
    if (times <= S) enter = true;
    else if (times >= E && times <= Q) out = true;
  });
  // console.log(enter, out);
  if (enter === true && out === true) answer++;
}

console.log(answer);
