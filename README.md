# baekjoon.js
javascript를 이용해서 백준 알고리즘 풀이

</br>

## Node.js로 백준 풀기
- vscode template
- codesandbox template

> 예제 입력 넣기
>> `data.txt`에 예제 입력을 작성 (js와 같은 폴더에)

### vscode
process.platform === "linux" -> boj
process.platform === "/dev/stdin" -> vscode
``` js
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "data.txt";
let inputs = fs.readFileSync(filePath).toString().trim().split("\n");

console.log("inputs : ", inputs);

let answer = '';

/**
 * @param {*} data - 처리할 데이터
 */
function solution(data){
    console.log(data);
    
}
solution(inputs);

//결과 출력
console.log(answer)
```


### CodeSandbox
-  `process.platform`이 `"linux"`로 boj와 일치하여 `filePath`를 다른코드로 대체
    - `filePath = !process.env.CODESANDBOX_HOST ? "/dev/stdin" : "data.txt"`
```js
const fs = require("fs");
const filePath = !process.env.CODESANDBOX_HOST ? "/dev/stdin" : "data.txt";
let inputs = fs.readFileSync(filePath).toString().trim().split("\n");

console.log("inputs : ", inputs);

let answer = '';

/**
 * @param {*} data - 처리할 데이터
 */
function solution(data){
    console.log(data);
    
}
solution(inputs);

//결과 출력
console.log(answer)
```

`inputs`의 입력방법은 각 코드 참고



## 💟 업로드 방식
This is a auto push repository for Baekjoon Online Judge created with [BaekjoonHub](https://github.com/BaekjoonHub/BaekjoonHub).
