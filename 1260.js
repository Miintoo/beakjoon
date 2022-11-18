const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");
const [n, m, v] = input[0].split(" ").map(Number);
let graph = Array.from({length: n + 1}, () => new Array());

for (let i = 0; i < m; i++) {
    let [start, end] = input[i + 1].split(" ").map(Number);
    graph[start].push(end);
    graph[end].push(start);
}

graph.forEach((element) => {
    element.sort((a, b) => a - b);
});

let visited = new Array(n + 1).fill(0);
let answer_dfs = [];

function DFS(v) {
    if (visited[v] === 1) {
        return;
    }
    answer_dfs.push(v);
    visited[v] = 1;
    if (answer_dfs.length === n) {
        return answer_dfs;
    } else {
        for (let i = 0; i < graph[v].length; i++) {
            DFS(graph[v][i]);
        }
    }
}

DFS(v);
console.log(answer_dfs.join(" "));

let answer_bfs = [];
visited.fill(0);

function BFS(v) {
    let queue = [v];
    while(queue.length) {
        let nv = queue.shift();
        if (visited[nv] === 1) {
            continue;
        }
        visited[nv] = 1;
        answer_bfs.push(nv);
        for (let i = 0; i < graph[nv].length; i++) {
            let next = graph[nv][i];
            if (visited[next] === 0) {
                queue.push(next);
            }
        }
    }
}

BFS(v);
console.log(answer_bfs.join(" "));
//