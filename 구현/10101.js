const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const a = +input[0];
const b = +input[1];
const c = +input[2];

const result_ary = ['Equilateral', 'Isosceles', 'Scalene', 'Error'];

function findResult() {
  if (a + b + c !== 180) {
    return result_ary[3];
  } else {
    if (a === b) {
      if (b === c) {
        return result_ary[0];
      } else {
        return result_ary[1];
      }
    } else {
      if (a === c || b === c) {
        return result_ary[1];
      } else {
        return result_ary[2];
      }
    }
  }
}

console.log(findResult());
