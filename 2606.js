// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().split("\n");
const fs = (`6
5
1 2
1 3
1 4
1 5
1 6`);
const input = fs.toString().split("\n");

let answer = 0;
let n = +input[0];
let m = +input[1];

let graph = Array.from({length: n+1}, () => new Array());
let visited = Array.from({length: n+1}, () => 0);

for (let i = 2; i < m + 2; i++) {
    let start = +input[i].split(" ")[0];
    let end = +input[i].split(" ")[1];

    graph[start].push(end);
    graph[end].push(start);
}


function DFS(v) {
    if (graph[v].length === 0) {
        return;
    } else {
        for (let i = 0; i < graph[v].length; i++) {
            if (visited[graph[v][i]] === 0) {
                visited[graph[v][i]] = 1;
                answer++;
                DFS(graph[v][i]);
            }
        }
    }
}

visited[1] = 1;
DFS(1);
console.log(answer);
