const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");
// const fs = ("4 6\n" +
//     "101111\n" +
//     "101010\n" +
//     "101011\n" +
//     "111011")
// const input = fs.toString().split("\n");

const [n, m] = input[0].split(" ").map(Number);

let graph = [];
for (let i = 1; i < n + 1; i++) {
    graph.push([...input[i]]);
}
let ck = Array.from({length: n}, () => new Array(m).fill(0));

let queue = [];
queue.push([0, 0]);
ck[0][0] = 1;

function BFS() {
    let dx = [-1, 0, 1, 0];
    let dy = [0, 1, 0, -1];
    while (queue.length) {
        let [x, y] = queue.shift();
        for (let i = 0; i < 4; i++) {
            let nx = x + dx[i];
            let ny = y + dy[i];
            if (nx >= 0 && nx < n && ny >= 0 && ny < m && graph[nx][ny] == 1) {
                ck[nx][ny] = ck[x][y] + 1;
                graph[nx][ny] = 0;
                queue.push([nx, ny]);
            }
        }
    }
}

BFS();
console.log(ck[n-1][m-1]);
