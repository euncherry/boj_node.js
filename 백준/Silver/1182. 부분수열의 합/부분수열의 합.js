//9663.부분수열의합.s2
/**
 * @method backtracking
 * @note
 */

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'data.txt';
let inputs = fs.readFileSync(filePath).toString().trim().split('\n');

const [N, S] = inputs[0].split(' ').map(Number);
const nums = inputs[1].split(' ').map(Number);

let answer = 0;

function solution(p, added) {
  if (p === N) {
    if (added === S) answer += 1;
    return;
  }

  solution(p + 1, added + nums[p]);
  solution(p + 1, added);
}
solution(0, 0);
S === 0 ? console.log(answer - 1) : console.log(answer);
