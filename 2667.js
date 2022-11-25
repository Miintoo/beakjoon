// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().split("\n");
const fs = (`7
0110100
0110101
1110101
0000111
0100000
0111110
0111000`);
const input = fs.toString().split("\n");
let answer = [];
let n = +input[0];
let graph = [];
let home = 0;

for (let i = 1; i < n + 1; i++) {
    let a = [];
    for (let j = 0; j < n; j++) {
        a.push(+input[i][j])
    }
    graph.push(a);
}

for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
        if (graph[i][j] === 1) {
            home = 0;
            graph[i][j] = 0;
            DFS(i, j);
            answer.push(home);
        }
    }
}

function DFS(x, y) {
    home += 1;
    let dx = [0, 1, 0, -1];
    let dy = [1, 0, -1, 0];
    for (let h = 0; h < 4; h++) {
        let nx = x + dx[h];
        let ny = y + dy[h];
        if (nx >= 0 && ny >= 0 && nx < n && ny < n && graph[nx][ny] === 1) {
            graph[nx][ny] = 0;
            DFS(nx, ny);
        }
    }

}

answer.sort((a, b) => a - b);
console.log(answer.length);
for (let i = 0; i < answer.length; i++) {
    console.log(answer[i]);
}