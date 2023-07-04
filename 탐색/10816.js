const fs = require("fs");
const input = fs.readFileSync("../input.txt").toString().split("\n");

const n = +input[0];
const m = +input[2];

const n_ary = input[1].split(' ');
const m_ary = input[3].split(' ');
const info_ary = [];
const result_ary = new Array(m);

n_ary.sort((a, b) => a - b);


let temp_ary = [];
for (let i = 0; i < n; i++) {
  const num = +n_ary[i];

  if (temp_ary.length === 0) {
    temp_ary.push(num, 1);
    continue;
  }

  if (temp_ary[0] === num) {
    temp_ary[1] += 1;
  } else {
    info_ary.push(temp_ary);
    temp_ary = [];
    temp_ary.push(num, 1);
  }

  if (i === n - 1) {
    info_ary.push(temp_ary);
  }
}

for (let i = 0; i < m; i++) {
  const num = +m_ary[i];

  result_ary[i] = binarySearch(num);
}

console.log(result_ary.join(' '));

function binarySearch(num) {
  let left = 0;
  let right = info_ary.length - 1;
  let mid;

  while (left <= right) {
    mid = parseInt((left + right) / 2);
    if (info_ary[mid][0] == num) {
      return info_ary[mid][1];
    } else if (info_ary[mid][0] < num) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return 0;
}

