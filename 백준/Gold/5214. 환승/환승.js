const QNUM = {
  number: 5214,
  title: `환승`,
  level: `g2`,
};

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
  graph[i + N] = [...arr];
  arr.forEach((v) => {
    graph[v].push(i + N);
  });
}
// console.table(graph);

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
  const vis = [...Array(N + M + 1).fill(-1)];
  queue.enQueue(node);
  vis[node] = 0;

  while (1) {
    if (queue.size() === 0) break;
    const val = queue.deQueue();
    for (let i = 0; i < graph[val].length; i++) {
      const v = graph[val][i];
      if (vis[v] === -1) {
        if (v === N) return vis[val] + 1;
        queue.enQueue(v);
        vis[v] = vis[val] + 1;
      }
    }
  }
  return vis[N];
}

const answer = BFS(1);
console.log(answer === -1 ? -1 : answer / 2 + 1);

// console.log(QNUM);
