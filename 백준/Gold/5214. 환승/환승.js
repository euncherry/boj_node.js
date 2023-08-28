/**
 * @method graph
 * @note
 */

const fs = require("fs");

// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'data.txt';
const filePath = !process.env.CODESANDBOX_HOST ? "/dev/stdin" : "data.txt";
let inputs = fs.readFileSync(filePath).toString().trim().split(`\n`);

const [N, K, M] = inputs[0].split(" ").map(Number);
const graph = [...Array(N + 1)].map((v) => [...Array()]);
const hyper = [];
for (let i = 1; i <= M; i++) {
  const arr = inputs[i].split(" ").map(Number);
  hyper[i] = [...arr];
  arr.forEach((v) => {
    graph[v].push(i);
  });
}

function BFS(node) {
  const queue = {
    q: [],
    front: 0,
    rear: 0,
    enQueue: function (val) {
      this.q[this.rear++] = val;
    },
    deQueue: function () {
      const deVal = this.q[this.front];
      this.q[this.front] = null;
      this.front += 1;
      return deVal;
    },
    size: function () {
      return this.rear - this.front;
    },
  };
  const vis = [...Array(N + 1).fill(0)];
  const hVis = [];
  queue.enQueue(node);
  vis[node] = 1;

  while (1) {
    if (queue.size() === 0) break;
    const val = queue.deQueue();
    for (let i = 0; i < graph[val].length; i++) {
      const hVal = graph[val][i];
      if (hVis[hVal]) continue;
      hVis[hVal] = true;
      for (let j = 0; j < K; j++) {
        const v = hyper[graph[val][i]][j];
        if (vis[v] === 0) {
          if (v === N) return vis[val] + 1;
          vis[v] = vis[val] + 1;
          queue.enQueue(v);
        }
      }
    }
  }
  return vis[N];
}

const answer = BFS(1);
console.log(answer ? answer : -1);