// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().split("\n");
const fs = ("4 6\n" +
    "101111\n" +
    "101010\n" +
    "101011\n" +
    "111011")
const input = fs.toString().split("\n");

const [n, m] = input[0].split(" ").map(Number);
let graph = [];
let queue = [];
queue.push([0, 0]);

for (let i = 1; i < n + 1; i++) {
    graph.push([...input[i]]);
}

let dx = [-1, 0, 1, 0];
let dy = [0, 1, 0, -1];

function BFS(x, y) {
    let nx
}

console.log(input)
console.log(graph)