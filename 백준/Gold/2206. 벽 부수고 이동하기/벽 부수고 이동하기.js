//2206.벽부수고이동하기.g3

/**
 * @method BFS
 * @note 필수적으로 한번 부셔야 목적지에 도착하는 경우를 
 * @note 위해서 부수지않고 가는 vis 동시 진행
 */

const fs = require('fs');
const filePath = '/dev/stdin';

let [initLen, ...init] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

//queue
const queue = {
  queue: [],
  front: 0,
  rear: 0,
  enQueue: function (value) {
    this.queue[this.rear++] = value;
  },
  deQueue: function () {
    const deVal = this.queue[this.front];
    delete this.queue[this.front];
    this.front += 1;
    return deVal;
  },
  size: function () {
    return this.rear - this.front;
  },
};

//set Data
const [N, M] = initLen.split(' ').map(Number);
let answer = -1;
const news = [
  [0, 1],
  [0, -1],
  [-1, 0],
  [1, 0],
];
const inputs = init.map((v) => v.split('').map(Number));

const vis = Array.from({ length: N }, (v) => [...Array(M)]);
const bVis = Array.from({ length: N }, (v) => [...Array(M)]);

function BFS() {
  queue.enQueue([0, 0, 1, { isBool: false, x: 0, y: 0 }]);
  vis[0][0] = 1;
  bVis[0][0] = 1;
  while (1) {
    if (queue.size() === 0) break;
    const [x, y, count, block] = queue.deQueue();
    // console.log(x, y, count, block);
    if (x === N - 1 && y === M - 1) {
      return (answer = count);
    }
    for (const [dx, dy] of news) {
      const mx = x + dx;
      const my = y + dy;
      if (mx < 0 || mx >= N || my < 0 || my >= M) continue;
      if (block.isBool) {
        if (inputs[mx][my]) continue;
        if (bVis[mx][my]) continue;
        bVis[mx][my] = count + 1;
        queue.enQueue([mx, my, count + 1, block]);
        continue;
      }
      //처음으로 벽만남
      if (inputs[mx][my]) {
        if (bVis[mx][my]) continue;
        bVis[mx][my] = count + 1;
        queue.enQueue([mx, my, count + 1, { isBool: true, x: mx, y: my }]);
        continue;
      }
      //생쨔
      if (vis[mx][my]) continue;
      if (inputs[mx][my]) continue;
      vis[mx][my] = count + 1;
      queue.enQueue([mx, my, count + 1, block]);
    }
  }
}

BFS();

console.log(answer);
